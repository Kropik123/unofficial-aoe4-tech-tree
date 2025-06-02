import './App.css'
//import {useTwitch} from "./hooks/useTwitch.ts";
import TechTree from "./components/TechTree/TechTree.component.tsx";

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
        <TechTree />
    );
}

export default App
