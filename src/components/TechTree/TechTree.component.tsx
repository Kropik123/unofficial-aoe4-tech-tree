import Building from "./Building.component.tsx";

const buildingRows = [
    <Building
        id={"house-1"}
        baseId={"house"}
        name={"House"}
        age={1}
        description={"Increases your maximum Population. Contains the unique Border Settlements technology."}
        displayClass={"Population Building"}
        unique={false}
        costs={{
            food: 0,
            wood: 50,
            stone: 0,
            gold: 0,
            vizier: 0,
            oliveoil: 0,
            total: 50,
            popcap: 0,
            time: 15
        }}
        icon={"https://data.aoe4world.com/images/buildings/house-1.png"}
        type={'GENERAL'}
        productionEntries={[
            {
                type: "TECHNOLOGY",
                age: 2,
                id: "border-settlements-2",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology 1/3",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "TECHNOLOGY",
                age: 3,
                id: "border-settlements-3",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology 2/3",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "MILITARY",
                age: 1,
                id: "madman",
                baseId: "madman",
                name: "Madman",
                description: "...",
                displayClass: "Light Melee Infantry",
                unique: false,
                costs: {
                    food: 50,
                    wood: 90,
                    stone: 0,
                    gold: 90,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "TECHNOLOGY",
                age: 4,
                id: "border-settlements-4",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology 3/3",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
        ]}
    />,
    <Building
        id={"house-1"}
        baseId={"house"}
        name={"House"}
        age={2}
        description={"Increases your maximum Population. Contains the unique Border Settlements technology."}
        displayClass={"Population Building"}
        unique={false}
        costs={{
            food: 0,
            wood: 50,
            stone: 0,
            gold: 0,
            vizier: 0,
            oliveoil: 0,
            total: 50,
            popcap: 0,
            time: 15
        }}
        icon={"https://data.aoe4world.com/images/buildings/house-1.png"}
        type={'MILITARY'}
        productionEntries={[
            {
                type: "MILITARY",
                age: 2,
                id: "border-settlements-2",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "TECHNOLOGY",
                age: 2,
                id: "border-settlements-2",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "TECHNOLOGY",
                age: 3,
                id: "border-settlements-2",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "WORKER",
                age: 4,
                id: "border-settlements-2",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "MILITARY",
                age: 4,
                id: "border-settlements-2",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            }
        ]}
    />,
    <Building
        id={"house-1"}
        baseId={"house"}
        name={"House"}
        age={3}
        description={"Increases your maximum Population. Contains the unique Border Settlements technology."}
        displayClass={"Population Building"}
        unique={false}
        costs={{
            food: 0,
            wood: 50,
            stone: 0,
            gold: 0,
            vizier: 0,
            oliveoil: 0,
            total: 50,
            popcap: 0,
            time: 15
        }}
        icon={"https://data.aoe4world.com/images/buildings/house-1.png"}
        type={'TECHNOLOGY'}
        productionEntries={[
            {
                type: "WORKER",
                age: 3,
                id: "border-settlements-3",
                baseId: "border-settlements",
                name: "Border Settlements",
                description: "Increase House line of sight by 7 tiles and improve their construction speed by 500%.",
                displayClass: "Building Technology",
                unique: true,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            },
            {
                type: "MILITARY",
                age: 3,
                id: "idk",
                baseId: "idk",
                name: "IDK",
                description: "...",
                displayClass: "IDK",
                unique: false,
                costs: {
                    food: 0,
                    wood: 40,
                    stone: 0,
                    gold: 80,
                    vizier: 0,
                    oliveoil: 0,
                    popcap: 0,
                    time: 20
                },
                icon: "https://data.aoe4world.com/images/technologies/border-settlements-2.png",
            }
        ]}
    />,
    <Building
        id={"house-1"}
        baseId={"house"}
        name={"House"}
        age={4}
        description={"Increases your maximum Population. Contains the unique Border Settlements technology."}
        displayClass={"Population Building"}
        unique={false}
        costs={{
            food: 0,
            wood: 50,
            stone: 0,
            gold: 0,
            vizier: 0,
            oliveoil: 0,
            total: 50,
            popcap: 0,
            time: 15
        }}
        icon={"https://data.aoe4world.com/images/buildings/house-1.png"}
        type={'LANDMARK'}
        productionEntries={[]}
    />,
]

function TechTree() {

    return (
        <div className="grid p-0">
            <div className="col-3 bg-purple-900">
                <h2>Byzantines</h2>
                <h3>3 Difficulty</h3>
            </div>
            <div className="col-9 flex flex-column bg-gray-900 p-2">
                <div className="flex flex-row justify-content-between">
                    <div>Collapsed ???</div>
                    <div>Byzantines ???</div>
                </div>
                <div className="flex flex-column bg-bluegray-900 border-1 border-yellow-200">
                    <div className="grid m-0 bg-yellow-900 text-gray-100 text-lg border-bottom-1 border-yellow-200">
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">I</div>
                            <div>DARK AGE</div>
                        </div>
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">II</div>
                            <div>FEUDAL AGE</div>
                        </div>
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">III</div>
                            <div>CASTLE AGE</div>
                        </div>
                        <div className="col-3 flex flex-row flex-1 justify-content-center gap-3 border-right-1 border-yellow-200 p-3">
                            <div className="font-bold text-yellow-200">IV</div>
                            <div>IMPERIAL AGE</div>
                        </div>
                    </div>
                    <div className="flex flex-column">
                        {buildingRows}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechTree
