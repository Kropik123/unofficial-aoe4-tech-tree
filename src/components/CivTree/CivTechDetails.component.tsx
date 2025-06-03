import CivTechDetail from "./CivTechDetail.component.tsx";
import type {GameEntity, GameEntityType} from "../../types/game.ts";

interface Props {
    entity: GameEntity,
}

function getColor (type: GameEntityType) {
    switch (type) {
        case 'GENERAL': return 'bg-bluegray-800';
        case 'WORKER': return 'bg-gray-800';
        case 'MILITARY': return 'bg-orange-800';
        case 'TECHNOLOGY': return 'bg-teal-700';
        case 'LANDMARK': return 'bg-gray-800';
    }
}

function getUpgradeRoot(entity: GameEntity): GameEntity {
    let current = entity;
    while (current.predecessor) {
        current = current.predecessor;
    }
    return current;
}

function renderSubEntities(entity: GameEntity) {
    const grouped: Record<string, GameEntity[]> = {};

    entity.subEntities.forEach(e => {
        const root = getUpgradeRoot(e);
        const key = root.id;
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(e);
    });

    const ageConfig: Record<number, { colClass: string; ages: number[] }> = {
        1: { colClass: 'col-3', ages: [1, 2, 3, 4] },
        2: { colClass: 'col-4', ages: [2, 3, 4] },
        3: { colClass: 'col-6', ages: [3, 4] },
        4: { colClass: 'col-12', ages: [4] }
    };

    const { colClass, ages } = ageConfig[entity.age];

    return (
        <div className="w-full space-y-4">
            {Object.values(grouped).map(group => {
                // Sort group by age for consistent left-to-right order
                const sortedGroup = [...group].sort((a, b) => a.age - b.age);

                return (
                    <div className="grid grid-nogutter" key={group[0].id}>
                        {ages.map(age => {
                            const entry = sortedGroup.find(e => e.age === age);
                            return (
                                <div className={colClass} key={age}>
                                    {entry && <CivTechDetail entity={entry} />}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

function CivTechDetails({entity}: Props) {
    return (
        <div className={`w-full p-2 ${getColor(entity.type)}`}>
            {renderSubEntities(entity)}
        </div>
    );
}

export default CivTechDetails;
