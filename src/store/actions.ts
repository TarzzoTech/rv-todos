import { LOADING, Action } from "../modal";

export const setLoader = (show: boolean): Action => {
    return {
        type: LOADING,
        payload: show
    };
}