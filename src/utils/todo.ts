import { Todo } from "../modal";
import { generateId } from "./util";

export const createTodo = (todoObject: Todo): Todo => {
    const todo = { ...todoObject };
    todo.Id = generateId();
    return todo;
}