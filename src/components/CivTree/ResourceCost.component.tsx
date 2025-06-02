type ResourceType = 'FOOD' | 'WOOD' | 'STONE' | 'GOLD' | 'VIZIER' | 'OLIVEOIL' | 'POPCAP' | 'TIME'

interface Props {
    type: ResourceType,
    cost: number,
}

function getResourceText (type: ResourceType) {
     switch (type) {
        case 'FOOD': return "F";
        case 'WOOD': return "W";
        case 'STONE': return "S";
        case 'GOLD': return "G";
        case 'VIZIER': return "V";
        case 'OLIVEOIL': return "O";
        case 'POPCAP': return "P";
        case 'TIME': return "D";
    }
}

function getResourceTextColor (type: ResourceType) {
    switch (type) {
        case 'FOOD': return "text-red-500";
        case 'WOOD': return "text-orange-700";
        case 'STONE': return "text-gray-400";
        case 'GOLD': return "text-yellow-500";
        case 'VIZIER': return "text-gray-200";
        case 'OLIVEOIL': return "text-green-700";
        case 'POPCAP': return "text-gray-200";
        case 'TIME': return "text-gray-200";
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
            <div className={"grid p-1 pl-2"}>
                <div className={`col-4 p-0 ${getResourceTextColor(props.type)} text-sm`}>{getResourceText(props.type)}</div>
                <div className={"col-8 p-0 text-gray-200 text-sm"}>{props.cost}{getResourcePostfix(props.type)}</div>
            </div>
        )
    } else {
        return <></>
    }
}

export default ResourceCost
