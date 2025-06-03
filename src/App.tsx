import './App.css'
//import {useTwitch} from "./hooks/useTwitch.ts";
import {parseAoE4WorldData} from "./lib/civDataParsing.ts";
import CivTree from "./components/CivTree/CivTree.component.tsx";
import {useEffect, useState} from "react";
import type {GameEntity} from "./types/game.ts";
import {getAllBuildings} from "./api/AoE4WorldData/buildings.ts";
import {getAllTechnologies} from "./api/AoE4WorldData/technologies.ts";
import {getAllUnits} from "./api/AoE4WorldData/units.ts";
import {ProgressSpinner} from "primereact/progressspinner";

function App() {
    //const {twitch, isAuthorized} = useTwitch();

    const [loading, setLoading] = useState<boolean>(false);
    const [civs, setCivs] = useState<Map<string, GameEntity[]>>(new Map());

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [allBuildings, allTechnologies, allUnits] = await Promise.all([
                    getAllBuildings(),
                    getAllTechnologies(),
                    getAllUnits(),
                ]);
                const parsedData = parseAoE4WorldData(allBuildings, allTechnologies, allUnits)
                setCivs(parsedData)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData().catch(console.error)
    }, [])

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
            {loading && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <ProgressSpinner />
                </div>
            )}
        </div>
    );
}

export default App
