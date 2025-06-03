import type {GameEntity, GameEntityAge, GameEntityType, ResourceCosts} from "../types/game.ts";
import type {
    AoE4WorldBuilding,
    AoE4WorldCosts,
    AoE4WorldTechnology,
    AoE4WorldUnit
} from "../api/apiTypes.ts";

/**
 * + Reads "allBuildings", "allTechnologies" and "allUnits" of AoE4WorldData API
 * + Returns Map of civilization-key (e.g. "by" for Byzantines) to the respective Buildings with units and technologies in sub entities
 */
export function parseAoE4WorldData(
    allBuildings: AoE4WorldBuilding[],
    allTechnologies: AoE4WorldTechnology[],
    allUnits: AoE4WorldUnit[]
): Map<string, GameEntity[]> {
    return new Map(collectCivKeysFromBuildings(allBuildings)
        .map(civ => [civ, parseAndSortDataForCiv(civ, allBuildings, allTechnologies, allUnits)]))
}

function collectCivKeysFromBuildings(buildings: AoE4WorldBuilding[]): string[] {
    return [...new Set(buildings.map(b => b.civs[0]))]
}

function parseAndSortDataForCiv(civ: string, allBuildings: AoE4WorldBuilding[], allTechnologies: AoE4WorldTechnology[], allUnits: AoE4WorldUnit[]): GameEntity[] {
    const buildings = allBuildings.filter(b => b.civs.includes(civ))
    const technologies = allTechnologies.filter(b => b.civs.includes(civ))
    const units = allUnits.filter(b => b.civs.includes(civ))

    const techsByProducer = mapTechnologiesByProducer(technologies);
    const unitsByProducer = mapUnitsByProducer(units);

    const techPredecessors = buildPredecessorMap(technologies);
    const unitPredecessors = buildPredecessorMap(units);

    const entities: GameEntity[] = [];
    const transformedCache = new Map<string, GameEntity>();

    for (const building of buildings) {
        const unitList = unitsByProducer.get(building.baseId)?.get(civ) || [];
        const techList = techsByProducer.get(building.baseId)?.get(civ) || [];

        const subEntities: GameEntity[] = [
            ...transformSubEntities(unitList, building.age, unitPredecessors, transformedCache),
            ...transformSubEntities(techList, building.age, techPredecessors, transformedCache),
        ];
        const sortedSubEntities = sortGameEntities(subEntities)

        const buildingEntity: GameEntity = {
            id: building.id,
            baseId: building.baseId,
            type: mapToType(building.type, building.classes),
            name: building.name,
            attribName: building.attribName,
            age: building.age as GameEntityAge,
            description: building.description,
            displayClass: building.displayClasses?.[0] || "",
            unique: building.unique,
            icon: building.icon,
            costs: transformCosts(building.costs),
            subEntities: sortedSubEntities,
        };

        entities.push(buildingEntity);
    }
    return sortGameEntities(entities)
}

function sortGameEntities(entities: GameEntity[]): GameEntity[] {
    const typePriority: Record<GameEntityType, number> = {
        WORKER: 0,
        GENERAL: 1,
        TECHNOLOGY: 2,
        MILITARY: 3,
        LANDMARK: 4,
    };

    return entities.sort((a, b) => {
        // Rule 1: Capital Town Center comes first
        if (a.baseId === "capital-town-center") return -1;
        if (b.baseId === "capital-town-center") return 1;

        // Rule 2: Sort by age
        if (a.age !== b.age) {
            return a.age - b.age;
        }

        // Rule 3: Sort by type priority
        const priorityA = typePriority[a.type];
        const priorityB = typePriority[b.type];
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        // Rule 4: Final tie-breaker: attribName alphabetically
        return a.attribName.localeCompare(b.attribName);
    });
}

function mapUnitsByProducer(units: AoE4WorldUnit[]): Map<string, Map<string, AoE4WorldUnit[]>> {
    const map = new Map<string, Map<string, AoE4WorldUnit[]>>();
    for (const unit of units) {
        const civ = unit.civs[0];
        for (const producer of unit.producedBy || []) {
            if (!map.has(producer)) {
                map.set(producer, new Map());
            }
            const civMap = map.get(producer)!;
            if (!civMap.has(civ)) {
                civMap.set(civ, []);
            }
            civMap.get(civ)!.push(unit);
        }
    }
    return map;
}

function mapTechnologiesByProducer(techs: AoE4WorldTechnology[]): Map<string, Map<string, AoE4WorldTechnology[]>> {
    const map = new Map<string, Map<string, AoE4WorldTechnology[]>>();
    for (const tech of techs) {
        const civ = tech.civs[0];
        for (const producer of tech.producedBy || []) {
            if (!map.has(producer)) {
                map.set(producer, new Map());
            }
            const civMap = map.get(producer)!;
            if (!civMap.has(civ)) {
                civMap.set(civ, []);
            }
            civMap.get(civ)!.push(tech);
        }
    }
    return map;
}

function transformSubEntities(
    entities: (AoE4WorldUnit | AoE4WorldTechnology)[],
    minAge: number,
    predecessorMap: Map<string, Map<number, AoE4WorldUnit | AoE4WorldTechnology>>,
    transformedMap: Map<string, GameEntity> // to avoid cycles
): GameEntity[] {
    return entities.map(entity => {
        const key = normalizeAttribName(entity.attribName);
        const baseEntityId = `${entity.type}:${entity.id}`;

        if (transformedMap.has(baseEntityId)) {
            return transformedMap.get(baseEntityId)!;
        }

        const predecessor = (() => {
            const versions = predecessorMap.get(key);
            if (!versions) return undefined;
            const lowerAges = Array.from(versions.keys()).filter(age => age < entity.age);
            if (lowerAges.length === 0) return undefined;

            const maxLowerAge = Math.max(...lowerAges);
            const predEntity = versions.get(maxLowerAge)!;
            return transformSubEntities([predEntity], minAge, predecessorMap, transformedMap)[0];
        })();

        const transformed: GameEntity = {
            id: entity.id,
            baseId: entity.baseId,
            type: mapToType(entity.type, entity.classes),
            name: entity.name,
            attribName: entity.attribName,
            age: Math.max(entity.age, minAge) as GameEntityAge,
            description: entity.description,
            displayClass: entity.displayClasses?.[0] || "",
            unique: entity.unique,
            icon: entity.icon,
            costs: transformCosts(entity.costs),
            subEntities: [],
            predecessor,
        };

        transformedMap.set(baseEntityId, transformed);
        return transformed;
    });
}

function mapToType(type: string, classes: string[]): GameEntityType {
    if (type === "building") {
        if (classes.includes("landmark")) {
            return "LANDMARK"
        } else if (classes.includes("technology")) {
            return "TECHNOLOGY"
        } else if (classes.includes("military")) {
            return "MILITARY"
        }
    } else if (type === "technology") {
        return "TECHNOLOGY"
    } else if (type === "unit") {
        if (classes.includes("worker")) {
            return "WORKER"
        } else {
            return "MILITARY"
        }
    }
    return "GENERAL"
}

function transformCosts(c: AoE4WorldCosts): ResourceCosts {
    return {
        food: c.food,
        wood: c.wood,
        stone: c.stone,
        gold: c.gold,
        vizier: c.vizier,
        oliveOil: c.oliveoil,
        total: c.total,
        popCap: c.popcap,
        time: c.time,
    };
}

function normalizeAttribName(attribName: string): string {
    // Match:
    // - underscore
    // - followed by 1-4 or i/ii/iii/iv (roman numerals)
    // - optionally followed by _mon
    const regex = /_(?:[1-4]|i{1,3}|iv)(?:_mon)?/gi;

    return attribName.replace(regex, '');
}

function buildPredecessorMap<T extends AoE4WorldUnit | AoE4WorldTechnology>(
    entities: T[]
): Map<string, Map<number, T>> {
    const map = new Map<string, Map<number, T>>();

    for (const entity of entities) {
        const key = normalizeAttribName(entity.attribName);
        if (!map.has(key)) {
            map.set(key, new Map());
        }
        map.get(key)!.set(entity.age, entity);
    }

    return map;
}
