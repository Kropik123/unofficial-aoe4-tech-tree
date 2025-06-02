import { useEffect, useState } from "react";

export function useTwitch() {
    const [twitch, setTwitch] = useState<TwitchExt | null>(null);
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

    useEffect(() => {
        if (window.Twitch && window.Twitch.ext) {
            const ext = window.Twitch.ext;
            setTwitch(ext);

            ext.onAuthorized(() => {
                setIsAuthorized(true);
            });

            ext.onVisibilityChanged((isVisible) => {
                if (!isVisible) {
                    setIsAuthorized(false);
                }
            });

            console.log("Twitch SDK available")
        } else {
            console.warn("Twitch SDK not available.");
        }
    }, []);

    return { twitch, isAuthorized };
}
