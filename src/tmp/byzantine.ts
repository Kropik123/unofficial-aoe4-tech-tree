import type {Civ, GameEntity} from "../components/CivTree/types.ts";

export const CIV_BY: Civ = {
    id: "by",
    name: "Byzantines",
    difficulty: 3,
    yearRange: {
        from: 330,
        to: 1453
    },
    keywords: ["City Planning", "Mercenaries", "Defense"],
    description: "The Byzantines construct sprawling networks of life-giving Aqueducts and Cisterns. \nLeverage powerful unique abilities and hire Mercenaries with exquisite Olive Oil. Peasants work tirelessly to manufacture Olive Oil for the empire.",
    features: [
        {
            name: "Olive Oil",
            description: "Collect a unique resource that is used to hire Mercenary units. Villagers gather Olive Oil equal to 50% Food gathered from Berry Bushes, 20% from Olive Groves, and 10% from Shore Fish.\n\n Fishing Boats generate Olive Oil equal to 20% of Food from Fish and Traders provide 20% Olive Oil based on the amount being traded."
        },
        {
            name: "Mercenaries",
            description: "Purchase contracts or establish control of Trade Posts to recruit unique units from other civilizations with Olive Oil at the Mercenary House.",
        },
        {
            name: "Cisterns and Aqueducts",
            description: "Cisterns provide nearby Villagers with boosted gather rates and an influence that enhances nearby buildings, improving unit production speed, research speed, or building defense. \n\nConstruct and Aqueduct network and connect them to Cisterns to increase its bonus output.",
        },
        {
            name: "Field Stones",
            description: "Gather Stone from every building constructed. Building Size determines the amount of Stone collected.",
        },
        {
            name: "Greek Fire",
            description: "Cheirosiphons along with upgraded Dromons and Trebuchets fling Greek Fire with their attacks, engulfing the area in flames for damage over time.",
        },
        {
            name: "Mangonel Emplacements",
            description: "Outposts and Keeps can be upgraded with Mangonel Emplacements. Stone Wall Towers come equipped with Mangonel Emplacements instead of Springalds.",
        },
        {
            name: "Unique Units",
            description: "Limitanei: Spearman replacement. Light melee infantry with the Shield Wall ability to increase ranged armor at the cost of move speed. \n\n Varangian Guard: Man-at-Arms replacement. Use the Berserking ability to increase damage at the cost of armor. Can construct Transport Ships and increase armor of transports when garrisoned. \n\nCataphract: Knight replacement. Heavy cavalry with Trample, a powerful targeted ability that runs through and damages enemies in its path. \n\nCheirosiphon: A ram equipped with a short ranged Greek Fire attack. \n\nDromon: Springald Ship replacement. Equipped with Greek Fire.",
        },
    ],
}

export const CIV_BY_ENTITIES: GameEntity[] = [
    {
        id: "capital-town-center-1",
        baseId: "capital-town-center",
        type: "LANDMARK",
        name: "Capital Town Center",
        age: 1,
        description: "All Resources can be dropped off here. Produces Villagers, Scouts, and increases your maximum Population. Adds additional attacks while garrisoned.\nCapital Town Centers can detect units stealth or disguises.",
        displayClass: "Economy & Population Building",
        unique: false,
        icon: "https://data.aoe4world.com/images/buildings/capital-town-center.png",
        costs: {
            food: 0,
            wood: 0,
            stone: 0,
            gold: 0,
            vizier: 0,
            oliveOil: 0,
            total: 0,
            time: 0,
            popCap: 0
        },
        subEntities: [
            {
                id: "villager-1",
                baseId: "villager",
                type: "WORKER",
                name: "Villager",
                age: 1,
                description: "Gathers Wood, Food, Stone, and Gold. Builds and repairs buildings and can repair siege engines and naval units.\n- Weak in combat",
                displayClass: "Worker",
                unique: false,
                icon: "https://data.aoe4world.com/images/units/villager-1.png",
                costs: {
                    food: 50,
                    wood: 0,
                    stone: 0,
                    gold: 0,
                    vizier: 0,
                    oliveOil: 0,
                    total: 50,
                    time: 20,
                    popCap: 1
                },
                subEntities: [],
            },
            {
                id: "scout-1",
                baseId: "scout",
                type: "MILITARY",
                name: "Scout",
                age: 1,
                description: "Lightly armed cavalry effective at exploring the world, hunting wildlife, and herding Sheep.\n+ Able to see into Stealth Forests\n+ Health regeneration\n+ High movement speed\n- Very weak in combat",
                displayClass: "Worker",
                unique: false,
                icon: "https://data.aoe4world.com/images/units/scout-1.png",
                costs: {
                    food: 65,
                    wood: 0,
                    stone: 0,
                    gold: 0,
                    vizier: 0,
                    oliveOil: 0,
                    total: 65,
                    time: 23,
                    popCap: 1
                },
                subEntities: [],
            },
            {
                id: "textiles-2",
                baseId: "textiles",
                type: "TECHNOLOGY",
                name: "Textiles",
                age: 2,
                description: "Increase Villagers' health by +50%.",
                displayClass: "Villager Technology",
                unique: false,
                icon: "https://data.aoe4world.com/images/units/scout-1.png",
                costs: {
                    food: 50,
                    wood: 0,
                    stone: 0,
                    gold: 100,
                    vizier: 0,
                    oliveOil: 0,
                    total: 150,
                    time: 20,
                    popCap: 0
                },
                subEntities: [],
            }
        ],
    }
]