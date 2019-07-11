import React, { useContext } from "react";
import { Store } from "../../../modal";
import { ContextAPI } from "../../../context";

export const TodoListItem = (props: TodoListItemProps) => {
    const { state, dispatch }: Store = useContext(ContextAPI);
    return (
        <ul>
            <li>Hi 1</li>
            <li>Hi 2</li>
            <li>Hi 3</li>
        </ul>
    );
}

export interface TodoListItemProps { }