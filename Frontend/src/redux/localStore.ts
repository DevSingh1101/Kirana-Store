import { IRootState } from "./store";

export const loadState = () => {
    try {
        const serializeState = localStorage.getItem("state");
        if (serializeState === null) {
            return undefined;
        }
        return JSON.parse(serializeState);
    } catch {
        return undefined;
    }
};

export const saveState = (state: IRootState) => {
    try {
        const serializeState = JSON.stringify(state);
        localStorage.setItem("state", serializeState);
    } catch {
        console.error("Failed to set state");
    }
};
