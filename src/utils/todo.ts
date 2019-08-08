import { Todo, TodoStatus } from "../modal";
import { generateId } from "./util";

export const emptyTodo = (): Todo => {
  return {
    Id: generateId(),
    ActionDate: new Date(),
    CreateDate: new Date(),
    Description: "",
    Status: TodoStatus.OPEN,
    Title: "",
    TodoItems: []
  };
};

export const getTodayItems = (todoList: Todo[]): Todo[] => {
  return todoList.filter(todo => todo.Status === TodoStatus.TODAY || (new Date(todo.ActionDate).toLocaleDateString() === new Date().toLocaleDateString()));
};
