import './App.css'
//import {useTwitch} from "./hooks/useTwitch.ts";
import allBuildingsJson from './tmp/allBuildings.json';
import allTechnologiesJson from './tmp/allTechnologies.json';
import allUnitsJson from './tmp/allUnits.json';
import type {AoE4WorldBuilding, AoE4WorldTechnology, AoE4WorldUnit} from "./api/apiTypes.ts";
import {parseAoE4WorldData} from "./lib/civDataParsing.ts";
import CivTree from "./components/CivTree/CivTree.component.tsx";

function App() {
    //const {twitch, isAuthorized} = useTwitch();
    const aoe4WorldBuildings = allBuildingsJson.data as AoE4WorldBuilding[]
    const aoe4WorldTechnologies = allTechnologiesJson.data as AoE4WorldTechnology[]
    const aoe4WorldUnits = allUnitsJson.data as AoE4WorldUnit[]
    const civs = parseAoE4WorldData(aoe4WorldBuildings, aoe4WorldTechnologies, aoe4WorldUnits)

    return (
        /*<div>
            {twitch ? (
                isAuthorized ? (
                    <p>Connected to Twitch Extension (Authorized)</p>
                ) : (
                    <p>Connected to Twitch Extension (Not Authorized)</p>
                )
            ) : (
                <p>Waiting for Twitch...</p>
            )}
        </div>*/
        <div>
            <CivTree civs={civs} />
        </div>
    );
}

export default App
