import { Dispatch, SetStateAction } from "react";
import { ToDoItem } from "../types";

type Props = {
  items: Record<string, Array<ToDoItem>>;
  setItems: Dispatch<SetStateAction<Record<string, ToDoItem[]>>>;
};
export function useTodo({ items, setItems }: Props) {
  const handleAddTodo = (newTask: string) => {
    if (!newTask) {
      return;
    }
    const newTodo: ToDoItem = {
      id: crypto.randomUUID(),
      name: newTask,
    };
    setItems((prev: Record<string, ToDoItem[]>) => {
      return { ...prev, toDo: [...prev["toDo"], newTodo] } as Record<
        string,
        ToDoItem[]
      >;
    });
  };

  const handleDeleteTodo = (id: string) => {
    const filteredItems = Object.keys(items).reduce(
      (acc: Record<string, Array<ToDoItem>>, key: string) => {
        acc[key] = items[key].filter((item) => item.id !== id);
        return acc;
      },
      {}
    );
    setItems(filteredItems);
  };

  return {
    handleAddTodo,
    handleDeleteTodo,
  };
}
