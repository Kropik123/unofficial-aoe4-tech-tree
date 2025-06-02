import {Button} from "primereact/button";
import EntityIcon from "./EntityIcon.component.tsx";
import {useState} from "react";
import BuildingProduction from "./BuildingProduction.component.tsx";

interface Props {
    type: 'GENERAL' | 'MILITARY' | 'TECHNOLOGY' | 'LANDMARK',
    id: string,
    baseId: string,
    name: string,
    age: number,
    description: string,
    displayClass: string
    unique: boolean,
    costs: {
        food: number,
        wood: number,
        stone: number,
        gold: number,
        vizier: number,
        oliveoil: number,
        total: number,
        popcap: number,
        time: number,
    },
    icon: string,
    productionEntries: {
            type: 'WORKER' | 'MILITARY' | 'TECHNOLOGY',
            age: number,
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
    }[],
}

const getColor = (type: 'GENERAL' | 'MILITARY' | 'TECHNOLOGY' | 'LANDMARK') => {
    switch (type) {
        case 'GENERAL': return 'bg-bluegray-900'
        case 'MILITARY': return 'bg-orange-900'
        case 'TECHNOLOGY': return 'bg-teal-800'
        case 'LANDMARK': return 'bg-gray-900'
    }
}

const renderPlaceholders = (age: number) => {
    const placeholderElement = <div className={"col-3 border-right-1 border-yellow-200"}/>
    const placeholders = []
    for (let i = 0; i < age - 1; i++) {
        placeholders.push(placeholderElement)
    }
    return placeholders
}

const calculateColCount = (age: number) => {
    return 15 - (age * 3)
}

function Building(props: Props) {
    const [showProduction, setShowProduction] = useState<boolean>(false)

    return (
        <div className="test grid m-0 flex-row bg-bluegray-900 border-1 border-yellow-200">
            {renderPlaceholders(props.age)}
            <div className={`col-${calculateColCount(props.age)} p-0`}>
                <div className={"flex flex-column"}>
                    <div className={`flex flex-row align-content-center gap-1 ${getColor(props.type)}`}>
                        <Button className={"text-yellow-200 text-sm"} icon="pi pi-caret-up" text aria-label="Collapse" onClick={() => setShowProduction(prev => !prev)} />
                        <EntityIcon
                            id={props.id}
                            baseId={props.baseId}
                            name={props.name}
                            description={props.description}
                            displayClass={props.displayClass}
                            unique={props.unique}
                            costs={props.costs}
                            icon={props.icon}
                            width={32}
                            height={32}
                            border={props.type === "LANDMARK"}/>
                        <div
                            className={"flex flex-column justify-content-center ml-1 text-gray-200 text-lg p-1 text-center uppercase"}>
                            {props.name}
                        </div>
                    </div>
                    {showProduction && <BuildingProduction
                        type={props.type}
                        entries={props.productionEntries}
                        age={props.age}
                    />}
                </div>
            </div>
        </div>
    );
}

export default Building
