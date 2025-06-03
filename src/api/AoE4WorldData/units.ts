import aoe4WorldDataClient from './client';
import type {AoE4WorldUnit} from "./types.ts";

export const getAllUnits = async () => {
    const response = await aoe4WorldDataClient.get('/units/all.json');
    return response.data.data as AoE4WorldUnit[];
};