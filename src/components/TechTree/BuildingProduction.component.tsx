import ProductionEntry from "./ProductionEntry.component.tsx";

interface Props {
    type: 'GENERAL' | 'MILITARY' | 'TECHNOLOGY' | 'LANDMARK',
    age: number, // age of the building (1-4)
    entries: {
        type: 'WORKER' | 'MILITARY' | 'TECHNOLOGY',
        age: number, // age of the entry (1-4)
        id: string,
        baseId: string,
        name: string,
        description: string,
        displayClass: string,
        unique: boolean,
        costs: {
            food: number,
            wood: number,
            stone: number,
            gold: number,
            vizier: number,
            oliveoil: number,
            popcap: number,
            time: number,
        },
        icon: string,
    }[]
}

const getColor = (type: Props["type"]) => {
    switch (type) {
        case 'GENERAL': return 'bg-bluegray-800';
        case 'MILITARY': return 'bg-orange-800';
        case 'TECHNOLOGY': return 'bg-teal-700';
        case 'LANDMARK': return 'bg-gray-800';
    }
};

const renderEntries = (entries: Props['entries'], buildingAge: number) => {
    // Group by baseId
    const grouped: Record<string, Props['entries']> = {};
    entries.forEach(entry => {
        if (!grouped[entry.baseId]) {
            grouped[entry.baseId] = [];
        }
        grouped[entry.baseId].push(entry);
    });

    // Map from building age to column size and applicable ages
    const ageConfig: Record<number, { colClass: string; ages: number[] }> = {
        1: { colClass: 'col-3', ages: [1, 2, 3, 4] },
        2: { colClass: 'col-4', ages: [2, 3, 4] },
        3: { colClass: 'col-6', ages: [3, 4] },
        4: { colClass: 'col-12', ages: [4] }
    };

    const { colClass, ages } = ageConfig[buildingAge];

    return (
        <div className="w-full">
            {Object.values(grouped).map(group => (
                <div className="grid grid-nogutter mb-5" key={group[0].baseId}>
                    {ages.map(age => {
                        const entry = group.find(e => e.age === age);
                        return (
                            <div className={colClass} key={age}>
                                {entry && (
                                    <ProductionEntry
                                        type={entry.type}
                                        id={entry.id}
                                        baseId={entry.baseId}
                                        name={entry.name}
                                        description={entry.description}
                                        displayClass={entry.displayClass}
                                        unique={entry.unique}
                                        costs={entry.costs}
                                        icon={entry.icon}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

function BuildingProduction(props: Props) {
    return (
        <div className={`w-full p-2 ${getColor(props.type)}`}>
            {renderEntries(props.entries, props.age)}
        </div>
    );
}

export default BuildingProduction;
