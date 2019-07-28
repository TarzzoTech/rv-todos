import { State } from "../modal";
import { getTodos } from "../files";

export const getInitialState = (): State => {
    return {
        IsLoading: false,
        TodoList: getTodos()
    };
}