import {Image} from "primereact/image";
import CustomTooltip from "../CustomTooltip/CustomtTooltip.component.tsx";
import EntityInfo from "./EntityInfo.component.tsx";

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
    width: number,
    height: number,
    border: boolean,
}

function EntityIcon(props: Props) {
    const infoContent = <EntityInfo
        id={props.id}
        baseId={props.baseId}
        name={props.name}
        description={props.description}
        displayClass={props.displayClass}
        unique={props.unique}
        costs={props.costs}
        icon={props.icon}
    />;

    return (
        <CustomTooltip content={infoContent}>
            <div className={"flex flex-column justify-content-center"}>
                <div className={`bg-white-alpha-10 ${props.border && 'border-1 border-yellow-200'}`}
                     style={{width: props.width, height: props.height}}>
                    <Image src={props.icon} alt={`Icon of ${props.id}`} width={`${props.width}px`}
                           height={`${props.height}px`}/>
                </div>
            </div>
        </CustomTooltip>
    );
}

export default EntityIcon
