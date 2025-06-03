import type {Civ} from "../types/game.ts";

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
