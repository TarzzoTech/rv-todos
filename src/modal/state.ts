import { Todo } from "./todo";
import { Action } from "./action";

export interface State {
    IsLoading: boolean;
    TodoList: Todo[];
    showModal: boolean;
    selectedTodo: Todo | null;
}

export type Dispatch = (action: Action) => void;

export interface Store {
    state: State;
    dispatch: Dispatch;
}