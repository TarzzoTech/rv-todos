import { Todo } from "./todo";

export interface State {
    IsLoading: boolean;
    TodoList: Todo[];
}