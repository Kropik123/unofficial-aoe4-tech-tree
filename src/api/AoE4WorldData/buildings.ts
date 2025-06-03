import aoe4WorldDataClient from './client';
import type {AoE4WorldBuilding} from "./types.ts";

export const getAllBuildings = async () => {
    const response = await aoe4WorldDataClient.get('/buildings/all.json');
    return response.data.data as AoE4WorldBuilding[];
};