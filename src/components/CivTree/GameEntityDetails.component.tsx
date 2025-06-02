import {Image} from "primereact/image";
import ResourceCost from "./ResourceCost.component.tsx";
import type {GameEntity} from "./types.ts";
import {renderDescription} from "./util.tsx";

interface Props {
    entity: GameEntity,
}

function GameEntityDetails({entity}: Props) {

    return (
        <div className="flex flex-column bg-bluegray-800 p-2 shadow-4">
            <div className={"grid"}>
                <div className={"col-2"}>
                    <div className={"bg-white-alpha-10"} style={{width: "45px"}}>
                        <Image src={entity.icon} alt={`Icon of ${entity.id}`} width={"45px"} />
                    </div>
                </div>
                <div className={"col-10 flex flex-column p-2"}>
                    <div className={"text-gray-200 text-lg uppercase"}>{entity.name}</div>
                    <div className={"text-cyan-200 text-base font-italic"}>{entity.displayClass}</div>
                </div>
            </div>
            <div className={"grid"}>
                <div className={"col-2 flex flex-column"}>
                    <ResourceCost type={"FOOD"} cost={entity.costs.food} />
                    <ResourceCost type={"WOOD"} cost={entity.costs.wood} />
                    <ResourceCost type={"STONE"} cost={entity.costs.stone} />
                    <ResourceCost type={"GOLD"} cost={entity.costs.gold} />
                    <ResourceCost type={"VIZIER"} cost={entity.costs.vizier} />
                    <ResourceCost type={"OLIVEOIL"} cost={entity.costs.oliveOil} />
                    <ResourceCost type={"POPCAP"} cost={entity.costs.popCap} />
                    <ResourceCost type={"TIME"} cost={entity.costs.time} />
                </div>
                <div className={"col-10 p-2"}>
                    {entity.unique && <div className={"text-gray-400 text-sm flex gap-1 ml-2 mb-2"}>
                        <i className="pi pi-info-circle"></i>
                        <span>Unique to civilization</span>
                    </div>}
                    <div className={"text-gray-200 text-sm"}>
                        {renderDescription(entity.description)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameEntityDetails
