export type GameEntityAge = 1 | 2 | 3 | 4;
export type GameEntityType = 'GENERAL' | 'WORKER' | 'MILITARY' | 'TECHNOLOGY' | 'LANDMARK'

export interface GameEntity {
    id: string,
    baseId: string,
    type: GameEntityType
    name: string,
    age: GameEntityAge,
    description: string,
    displayClass: string,
    unique: boolean,
    icon: string,
    resourceCosts: ResourceCosts,
    subEntities: GameEntity[],
}

export interface ResourceCosts {
    food: number,
    wood: number,
    stone: number,
    gold: number,
    vizier: number,
    oliveOil: number,
    total: number,
    popCap: number,
    time: number,
}

