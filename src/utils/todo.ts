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
  return todoList.filter(
    todo =>
      todo.Status === TodoStatus.TODAY ||
      new Date(todo.ActionDate).toLocaleDateString() ===
        new Date().toLocaleDateString()
  );
};

export const getCategoryBasedItems = (
  todoList: Todo[],
  category: TodoStatus
): Todo[] => {
  return todoList.filter(
    todo =>
      todo.Status === category &&
      new Date(todo.ActionDate).toLocaleDateString() !==
        new Date().toLocaleDateString()
  );
};

export const dateBeautifier = (date: Date): string => {
  const dateObj = new Date(date);
  let dd: any = dateObj.getDate();
  let mm: any = dateObj.getMonth() + 1;
  const yyyy = dateObj.getFullYear();
  let min: any = dateObj.getMinutes();
  let hr: any = dateObj.getHours();
  if (dd < 10) {
    dd = `0${dd}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  if (min < 10) {
    min = `0${min}`
  }
  if (hr < 10) {
    hr = `0${hr}`
  }

  return `${yyyy}-${mm}-${dd}T${hr}:${min}`;
}