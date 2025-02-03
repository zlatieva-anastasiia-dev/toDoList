import { useState } from "react";
import { ToDoItem } from "../../../App";

export function useToDoList() {
  const [todoItems, setTodoItems] = useState<ToDoItem[]>([]);
  const handleAddTodo = (newTask: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      value: newTask,
      isCompleted: false,
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const handleToggleToDo = (todoId: string) => {
    setTodoItems((prevToDoItems) =>
      prevToDoItems.map((todoItem) =>
        todoItem.id === todoId
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  };

  const handleRemoveTodo = (todoId: string) => {
    setTodoItems((prevToDoItems) =>
      prevToDoItems.filter((todoItem) => todoItem.id !== todoId)
    );
  };

  return {
    handleAddTodo,
    handleToggleToDo,
    handleRemoveTodo,
    todoItems,
  };
}
