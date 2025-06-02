import {Image} from "primereact/image";
import ResourceCost from "./ResourceInfo.component.tsx";

interface Props {
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
}

// TODO maybe reuse?
const renderDescription = (description: string) => {
    const normalized = description.replace(/\\n|\/n/g, '\n'); // handle \n or /n
    return normalized.split('\n').map((line, index, arr) => (
        <span key={index}>
      {line}
            {index < arr.length - 1 && <br />}
    </span>
    ));
}

function EntityInfo(props: Props) {

    return (
        <div className="flex flex-column bg-bluegray-800 p-2 shadow-4">
            <div className={"grid"}>
                <div className={"col-2"}>
                    <div className={"bg-white-alpha-10"} style={{width: "45px"}}>
                        <Image src={props.icon} alt={`Icon of ${props.id}`} width={"45px"} />
                    </div>
                </div>
                <div className={"col-10 flex flex-column p-2"}>
                    <div className={"text-gray-200 text-lg uppercase"}>{props.name}</div>
                    <div className={"text-cyan-200 text-base font-italic"}>{props.displayClass}</div>
                </div>
            </div>
            <div className={"grid"}>
                <div className={"col-2 flex flex-column"}>
                    <ResourceCost type={"FOOD"} cost={props.costs.food} />
                    <ResourceCost type={"WOOD"} cost={props.costs.wood} />
                    <ResourceCost type={"STONE"} cost={props.costs.stone} />
                    <ResourceCost type={"GOLD"} cost={props.costs.gold} />
                    <ResourceCost type={"VIZIER"} cost={props.costs.vizier} />
                    <ResourceCost type={"OLIVEOIL"} cost={props.costs.oliveoil} />
                    <ResourceCost type={"POPCAP"} cost={props.costs.popcap} />
                    <ResourceCost type={"TIME"} cost={props.costs.time} />
                </div>
                <div className={"col-10 p-2"}>
                    {props.unique && <div className={"text-gray-400 text-sm flex gap-1 ml-2 mb-2"}>
                        <i className="pi pi-info-circle"></i>
                        <span>Unique to civilization</span>
                    </div>}
                    <div className={"text-gray-200 text-sm"}>
                        {renderDescription(props.description)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EntityInfo
