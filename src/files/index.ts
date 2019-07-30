import { Todo, TodoStatus } from "../modal";

const storage = localStorage;

export const checkAndCreateJSON = () => {
  return new Promise((resolve: (todos: Todo[]) => void, reject) => {
    try {
      const todosString = storage.getItem("todos");
      let todos: Todo[] = [];
      if (todosString) {
        todos = JSON.parse(todosString);
      } else {
        storage.setItem("todos", JSON.stringify(todos));
      }
      resolve(todos);
    } catch (err) {
      reject(err);
    }
  });
};

export const getTodos = (): Todo[] => {
  let response: Todo[] = [];
  checkAndCreateJSON()
    .then(todos => {
      console.log(todos);
      response = todos;
    })
    .catch(err => {
      console.log(err);
    });
  return response;
};

export const insertTodo = (todo: Todo) => {
  return new Promise((resolve: (todos: Todo[]) => void, reject) => {
    try {
      const todosString = storage.getItem("todos");
      let todos: Todo[] = [];
      if (todosString) {
        todos = JSON.parse(todosString);
        todos.push(todo);
      }
      storage.setItem("todos", JSON.stringify(todos));
      resolve(todos);
    } catch (err) {
      reject(err);
    }
  });
};

export const updateTodo = (todo: Todo) => {
  return new Promise((resolve: (todos: Todo[]) => void, reject) => {
    try {
      const todosString = storage.getItem("todos");
      let todos: Todo[] = [];
      if (todosString) {
        todos = JSON.parse(todosString);
        todos = todos.map(t => {
          if (t.Id === todo.Id) {
            return { ...t, ...todo };
          } else {
            return t;
          }
        });
      }
      storage.setItem("todos", JSON.stringify(todos));
      resolve(todos);
    } catch (err) {
      reject(err);
    }
  });
};

export const deleteTodo = (todo: Todo) => {
  return new Promise((resolve: (todos: Todo[]) => void, reject) => {
    try {
      const todosString = storage.getItem("todos");
      let todos: Todo[] = [];
      if (todosString) {
        todos = JSON.parse(todosString);
        todos = todos.filter(t => t.Id !== todo.Id);
      }
      storage.setItem("todos", JSON.stringify(todos));
      resolve(todos);
    } catch (err) {
      reject(err);
    }
  });
};
