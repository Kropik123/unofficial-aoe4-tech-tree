import {Image} from "primereact/image";
import CustomTooltip from "../CustomTooltip/CustomtTooltip.component.tsx";
import GameEntityDetails from "./GameEntityDetails.component.tsx";
import type {GameEntity} from "../../types/game.ts";

interface Props {
    entity: GameEntity,
    width: number,
    height: number,
}

function GameEntityIcon({entity, width, height}: Props) {
    const infoContent = <GameEntityDetails entity={entity} />;

    return (
        <CustomTooltip content={infoContent}>
            <div className={"flex flex-column justify-content-center"}>
                <div className={`bg-white-alpha-10 ${entity.type === 'LANDMARK' && 'border-1 border-yellow-200'}`} style={{width: width + "px", height: height + "px"}}>
                    <Image src={entity.icon} alt={`Icon of ${entity.id}`} width={`${width}px`} height={`${height}px`}/>
                </div>
            </div>
        </CustomTooltip>
    );
}

export default GameEntityIcon
