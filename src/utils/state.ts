import { State } from "../modal";

export const getInitialState = (): State => {
    return {
        IsLoading: false,
        TodoList: []
    };
}