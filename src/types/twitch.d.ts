export {};

declare global {
    interface Window {
        Twitch?: {
            ext?: TwitchExt;
        };
    }
}

export interface TwitchAuth {
    clientId: string;
    channelId: string;
    userId: string;
    token: string;
    // add more fields if needed
}

export interface TwitchExt {
    onAuthorized(callback: (auth: TwitchAuth) => void): void;
    onVisibilityChanged(callback: (isVisible: boolean, context: string) => void): void;
    // add other Twitch SDK methods you use
}
