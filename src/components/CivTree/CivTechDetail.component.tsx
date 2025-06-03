import GameEntityIcon from "./GameEntityIcon.component.tsx";
import type {GameEntity, GameEntityType} from "../../types/game.ts";

interface Props {
    entity: GameEntity,
}

function getColor (type: GameEntityType) {
    switch (type) {
        case 'GENERAL': return 'bg-bluegray-700';
        case 'WORKER': return 'bg-gray-700';
        case 'MILITARY': return 'bg-orange-700';
        case 'TECHNOLOGY': return 'bg-teal-600';
        case 'LANDMARK': return 'bg-gray-700';
    }
}

function CivTechDetail({entity}: Props) {
    return (<div className={"flex flex-row justify-content-center align-content-center p-2"}>
        <div className={"flex flex-column justify-content-center"}>
            <div className={"flex flex-row justify-content-center"}>
                <div className={`${getColor(entity.type)}`} style={{width: "45px", height: "45px"}}>
                    <GameEntityIcon entity={entity} width={45} height={45}/>
                </div>
            </div>
            <div className={"text-sm text-gray-200"}>
                {entity.name}
            </div>
        </div>
    </div>)
}

export default CivTechDetail
