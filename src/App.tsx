import './App.css'
//import {useTwitch} from "./hooks/useTwitch.ts";
import CivTree from "./components/CivTree/CivTree.component.tsx";
import {CIV_BY, CIV_BY_ENTITIES} from "./tmp/byzantine.ts";

function App() {
    //const {twitch, isAuthorized} = useTwitch();

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
        <CivTree civ={CIV_BY} entities={CIV_BY_ENTITIES} />
    );
}

export default App
