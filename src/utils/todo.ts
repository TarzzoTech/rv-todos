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

export const addTodo = (todoList: Todo[], todo: Todo): Todo[] => {
  const newTodoList = JSON.parse(JSON.stringify(todoList));
  newTodoList.push(todo);
  return newTodoList;
};
