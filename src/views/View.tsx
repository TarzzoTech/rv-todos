import React, { useContext } from "react";
import { Store } from "../modal";
import { ContextAPI } from "../context";

export const View = (props: ViewProps) => {
    const { state, dispatch }: Store = useContext(ContextAPI);
    return (
        <ul>
            <li>Loading: {JSON.stringify(state.IsLoading)}</li>
        </ul>
    );
}

export interface ViewProps {
}