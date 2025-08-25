export type ToDoItem = {
  id: string;
  name: string;
};

export type TaskColumn = {
  id: string;
  title: string;
};

export type ItemsInTaskColumn = Record<string, Array<ToDoItem>>;
