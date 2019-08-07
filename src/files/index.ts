import { Todo } from "../modal";

const storage = localStorage;

const data: Todo[] = [
  {
    Id: "asassasa",
    ActionDate: new Date(),
    CreateDate: new Date(),
    Status: 0,
    Title: "Item 1",
    TodoItems: [
      {
        Id: "sdfsdfdfdsd",
        IsEditing: false,
        Title: "Sub Item 1",
        Completed: false
      },
      {
        Id: "sdfsdfdfsd",
        IsEditing: false,
        Title: "Sub Item 2",
        Completed: false
      },
      {
        Id: "sdfsdfdfds",
        IsEditing: false,
        Title: "Sub Item 3",
        Completed: false
      }
    ]
  },
  {
    Id: "asassasae",
    ActionDate: new Date(),
    CreateDate: new Date(),
    Status: 0,
    Title: "Item 2",
    TodoItems: [
      {
        Id: "sdfsdfdfdsde",
        IsEditing: false,
        Title: "Sub Item 11",
        Completed: false
      },
      {
        Id: "sdfsdfdfsdr",
        IsEditing: false,
        Title: "Sub Item 12",
        Completed: false
      },
      {
        Id: "sdfsdfdfdsd",
        IsEditing: false,
        Title: "Sub Item 13",
        Completed: false
      }
    ]
  },
  {
    Id: "asassasas",
    ActionDate: new Date(),
    CreateDate: new Date(),
    Status: 0,
    Title: "Item 3",
    TodoItems: [
      {
        Id: "sdfsdfdfdsdd",
        IsEditing: false,
        Title: "Sub Item 21",
        Completed: false
      },
      {
        Id: "sdfsdfdfsdf",
        IsEditing: false,
        Title: "Sub Item 22",
        Completed: false
      },
      {
        Id: "sdfsdfdfdsd",
        IsEditing: false,
        Title: "Sub Item 23",
        Completed: false
      }
    ]
  }
];

export const checkAndCreateJSON = () => {
  try {
    const todosString = storage.getItem("todos");
    let todos: Todo[] = data;
    if (todosString) {
      todos = JSON.parse(todosString);
    } else {
      storage.setItem("todos", JSON.stringify(todos));
    }
    return todos;
  } catch (err) {
    return [];
  }
};

export const getTodos = (): Todo[] => {
  let response: Todo[] = checkAndCreateJSON();
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
