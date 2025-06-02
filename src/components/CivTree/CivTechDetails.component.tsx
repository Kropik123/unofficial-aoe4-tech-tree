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
};

function renderSubEntities (entity: GameEntity) {
    // Group by baseId
    const grouped: Record<string, GameEntity[]> = {};
    entity.subEntities.forEach(e => {
        if (!grouped[e.baseId]) {
            grouped[e.baseId] = [];
        }
        grouped[e.baseId].push(e);
    });

    // Map from building age to column size and applicable ages
    const ageConfig: Record<number, { colClass: string; ages: number[] }> = {
        1: { colClass: 'col-3', ages: [1, 2, 3, 4] },
        2: { colClass: 'col-4', ages: [2, 3, 4] },
        3: { colClass: 'col-6', ages: [3, 4] },
        4: { colClass: 'col-12', ages: [4] }
    };

    const { colClass, ages } = ageConfig[entity.age];

    console.log(grouped)

    return (
        <div className="w-full">
            {Object.values(grouped).map(group => (
                <div className="grid grid-nogutter mb-5" key={group[0].baseId}>
                    {ages.map(age => {
                        const entry = group.find(e => e.age === age);
                        console.log(entry)
                        return (
                            <div className={colClass} key={age}>
                                {entry && <CivTechDetail entity={entry}/>}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

function CivTechDetails({entity}: Props) {
    return (
        <div className={`w-full p-2 ${getColor(entity.type)}`}>
            {renderSubEntities(entity)}
        </div>
    );
}

export default CivTechDetails;
