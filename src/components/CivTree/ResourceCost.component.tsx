import foodIcon from '../../assets/resourceIcons/food.png';
import woodIcon from '../../assets/resourceIcons/wood.png';
import stoneIcon from '../../assets/resourceIcons/stone.png';
import goldIcon from '../../assets/resourceIcons/gold.png';
import vizierIcon from '../../assets/resourceIcons/vizier.png';
import oliveOilIcon from '../../assets/resourceIcons/oliveOil.png';
import popcapIcon from '../../assets/resourceIcons/popcap.png';
import timeIcon from '../../assets/resourceIcons/time.png';
import {Image} from "primereact/image";

type ResourceType = 'FOOD' | 'WOOD' | 'STONE' | 'GOLD' | 'VIZIER' | 'OLIVEOIL' | 'POPCAP' | 'TIME'

interface Props {
    type: ResourceType,
    cost: number,
}

function getResourceImage (type: ResourceType) {
     switch (type) {
        case 'FOOD': return foodIcon;
        case 'WOOD': return woodIcon;
        case 'STONE': return stoneIcon;
        case 'GOLD': return goldIcon;
        case 'VIZIER': return vizierIcon;
        case 'OLIVEOIL': return oliveOilIcon;
        case 'POPCAP': return popcapIcon;
        case 'TIME': return timeIcon;
    }
}


function getResourceImageAlt (type: ResourceType) {
    switch (type) {
        case 'FOOD': return "Food icon";
        case 'WOOD': return "Wood icon";
        case 'STONE': return "Stone icon";
        case 'GOLD': return "Gold icon";
        case 'VIZIER': return "Vizier icon";
        case 'OLIVEOIL': return "Olive Oil icon";
        case 'POPCAP': return "Pop Cap icon";
        case 'TIME': return "Time icon";
    }
}

const getResourcePostfix = (type: ResourceType) => {
    switch (type) {
        case 'FOOD': return "";
        case 'WOOD': return "";
        case 'STONE': return "";
        case 'GOLD': return "";
        case 'VIZIER': return "";
        case 'OLIVEOIL': return "";
        case 'POPCAP': return "";
        case 'TIME': return "s";
    }
}

function ResourceCost(props: Props) {

    if (props.cost > 0) {
        return (
            <div className={"grid p-1 pl-2 flex flex-row"}>
                <div className={"col-5 p-0 m-0"}>
                    <Image src={getResourceImage(props.type)} alt={getResourceImageAlt(props.type)} width={"15"} height={"15"} />
                </div>
                <div className={"col-7 p-0 m-0 text-gray-200 text-sm"}>{props.cost}{getResourcePostfix(props.type)}</div>
            </div>
        )
    } else {
        return <></>
    }
}

export default ResourceCost
