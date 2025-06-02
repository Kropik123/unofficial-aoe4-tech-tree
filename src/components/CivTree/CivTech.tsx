import {Button} from "primereact/button";
import GameEntityIcon from "./GameEntityIcon.component.tsx";
import {useState} from "react";
import CivTechDetails from "./CivTechDetails.component.tsx";
import type {GameEntity, GameEntityType} from "../../types/game.ts";

interface Props {
    entity: GameEntity
}

const getColor = (type: GameEntityType) => {
    switch (type) {
        case 'GENERAL': return 'bg-bluegray-900'
        case 'WORKER': return 'bg-gray-900'
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

function CivTech({entity}: Props) {
    const [setShowDetails, setSetShowDetails] = useState<boolean>(false)

    return (
        <div className="test grid m-0 flex-row bg-bluegray-900 border-1 border-yellow-200">
            {renderPlaceholders(entity.age)}
            <div className={`col-${calculateColCount(entity.age)} p-0`}>
                <div className={"flex flex-column"}>
                    <div className={`flex flex-row align-content-center gap-1 ${getColor(entity.type)}`}>
                        <Button className={"text-yellow-200 text-sm"} icon="pi pi-caret-up" text aria-label="Collapse" onClick={() => setSetShowDetails(prev => !prev)} />
                        <GameEntityIcon entity={entity} width={32} height={32} />
                        <div className={"flex flex-column justify-content-center ml-1 text-gray-200 text-lg p-1 text-center uppercase"}>
                            {entity.name}
                        </div>
                    </div>
                    {setShowDetails && <CivTechDetails entity={entity}/>}
                </div>
            </div>
        </div>
    );
}

export default CivTech
