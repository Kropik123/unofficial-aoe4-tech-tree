import aoe4WorldDataClient from './client';
import type {AoE4WorldUpgrade} from "./types.ts";

export const getAllUpgrades = async () => {
    const response = await aoe4WorldDataClient.get('/upgrades/all.json');
    return response.data.data as AoE4WorldUpgrade[];
};