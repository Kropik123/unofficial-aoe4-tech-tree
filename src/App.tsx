import './App.css'
import {parseAoE4WorldData} from "./lib/civDataParsing.ts";
import CivTree from "./components/CivTree/CivTree.component.tsx";
import {useEffect, useState} from "react";
import type {GameEntity} from "./types/game.ts";
import {getAllBuildings} from "./api/AoE4WorldData/buildings.ts";
import {getAllTechnologies} from "./api/AoE4WorldData/technologies.ts";
import {getAllUnits} from "./api/AoE4WorldData/units.ts";
import {ProgressSpinner} from "primereact/progressspinner";
import {useTwitch} from "./hooks/useTwitch.ts";

function App() {
    const {twitch, isAuthorized} = useTwitch();

    const [loading, setLoading] = useState<boolean>(false);
    const [civs, setCivs] = useState<Map<string, GameEntity[]>>(new Map());

    useEffect(() => {
        if (twitch) {
            if (isAuthorized) {
                console.log("Connected to Twitch Extension (Authorized)")
            } else {
                console.log("Connected to Twitch Extension (Not Authorized)")
            }
        } else {
            console.log("Waiting for Twitch...")
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data ...")
            setLoading(true);
            try {
                const [allBuildings, allTechnologies, allUnits] = await Promise.all([
                    getAllBuildings(),
                    getAllTechnologies(),
                    getAllUnits(),
                ]);
                const parsedData = parseAoE4WorldData(allBuildings, allTechnologies, allUnits)
                setCivs(parsedData)
                console.log("Finished fetching data")
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (twitch) {
            fetchData().catch(console.error)
        }
    }, [twitch])

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
