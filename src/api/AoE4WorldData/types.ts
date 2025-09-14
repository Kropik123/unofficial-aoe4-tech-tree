export interface AoE4WorldGameEntity {
    id: string;
    baseId: string;
    type: "unit" | "building" | "technology" | "upgrade";
    name: string;
    pbgid: number;
    attribName: string;
    age: number;
    civs: string[];
    description: string;
    classes: string[];
    displayClasses: string[];
    unique: boolean;
    costs: AoE4WorldCosts;
    producedBy?: string[];
    icon: string;
}

export interface AoE4WorldCosts {
    food: number;
    wood: number;
    stone: number;
    gold: number;
    vizier: number;
    oliveoil: number;
    total: number;
    popcap: number;
    time: number;
}

export interface AoE4WorldWeapon {
    name: string;
    type: string;
    damage: number;
    speed: number;
    range: AoE4WorldRange;
    modifiers?: AoE4WorldModifier[];
    durations: AoE4WorldDurations;
    attribName: string;
    pbgid: number;
    burst?: AoE4WorldBurst;
}

export interface AoE4WorldRange {
    min: number;
    max: number;
}

export interface AoE4WorldDurations {
    aim: number;
    windup: number;
    attack: number;
    winddown: number;
    reload: number;
    setup: number;
    teardown: number;
    cooldown: number;
}

export interface AoE4WorldBurst {
    count: number;
}

export interface AoE4WorldModifier {
    property: string;
    target: {
        class?: string[][];
        id?: string[];
    };
    effect: string;
    value: number;
    type: string;
}

export interface AoE4WorldEffect {
    property: string;
    select: {
        class?: string[][];
        id?: string[];
    };
    effect: string;
    value: number;
    type: string;
}

export interface AoE4WorldArmor {
    type: string;
    value: number;
}

export interface AoE4WorldSight {
    inner_height: number;
    inner_radius: number;
    outer_height: number;
    outer_radius: number;
    base: number;
    line: number;
    height: number;
}

export interface AoE4WorldMovement {
    speed: number;
}

export interface AoE4WorldGarrison {
    capacity: number;
    classes: string[];
}

export interface AoE4WorldUnit extends AoE4WorldGameEntity {
    type: "unit";
    hitpoints: number;
    weapons: AoE4WorldWeapon[];
    armor?: AoE4WorldArmor[];
    sight?: AoE4WorldSight;
    movement: AoE4WorldMovement;
    garrison?: AoE4WorldGarrison;
}

export interface AoE4WorldBuilding extends AoE4WorldGameEntity {
    type: "building";
    hitpoints: number;
    weapons?: AoE4WorldWeapon[];
    armor?: AoE4WorldArmor[];
    sight?: AoE4WorldSight;
    garrison?: AoE4WorldGarrison;
    influences?: string[];
}

export interface AoE4WorldTechnology extends AoE4WorldGameEntity {
    type: "technology";
    effects: AoE4WorldEffect[];
}

export interface AoE4WorldUpgrade extends AoE4WorldGameEntity {
    type: "upgrade";
    unlocks: string;
}

//export type AoE4WorldEntity = AoE4WorldUnit | AoE4WorldBuilding | AoE4WorldTechnology | AoE4WorldUpgrade;
