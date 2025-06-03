import aoe4WorldDataClient from './client';
import type {AoE4WorldTechnology} from "./types.ts";

export const getAllTechnologies = async () => {
    const response = await aoe4WorldDataClient.get('/technologies/all.json');
    return response.data.data as AoE4WorldTechnology[];
};