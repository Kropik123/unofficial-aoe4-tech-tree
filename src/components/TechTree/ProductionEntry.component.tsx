import EntityIcon from "./EntityIcon.component.tsx";

interface Props {
    type: 'WORKER' | 'MILITARY' | 'TECHNOLOGY',
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

const getColor = (type: 'WORKER' | 'MILITARY' | 'TECHNOLOGY') => {
    switch (type) {
        case 'WORKER': return 'bg-bluegray-700'
        case 'MILITARY': return 'bg-orange-700'
        case 'TECHNOLOGY': return 'bg-teal-600'
    }
}

function ProductionEntry(props: Props) {
    return (<div className={"flex flex-row justify-content-center align-content-center"}>
        <div className={"flex flex-column justify-content-center"}>
            <div className={"flex flex-row justify-content-center"}>
                <div className={`${getColor(props.type)}`} style={{width: "40px", height: "40px"}}>
                    <EntityIcon
                        id={props.id}
                        baseId={props.baseId}
                        name={props.name}
                        description={props.description}
                        displayClass={props.displayClass}
                        unique={props.unique}
                        costs={props.costs}
                        icon={props.icon}
                        width={40}
                        height={40}
                        border={false}/>
                </div>
            </div>

            <div className={"text-sm text-gray-200"}>
                {props.name}
            </div>
        </div>
    </div>)
}

export default ProductionEntry
