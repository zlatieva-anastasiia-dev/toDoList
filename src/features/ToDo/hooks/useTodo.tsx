import { Dispatch, SetStateAction } from "react";
import { ItemsInTaskColumn, ToDoItem } from "../types";
import { updateItemsToLocalStorage } from "../utils";

type Props = {
  items: ItemsInTaskColumn;
  setItems: Dispatch<SetStateAction<ItemsInTaskColumn>>;
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
    const updatedItems = {
      ...items,
      toDo: [...items["toDo"], newTodo],
    };
    setItems(updatedItems);
    updateItemsToLocalStorage(updatedItems);
  };

  const handleDeleteTodo = (id: string) => {
    const filteredItems = Object.keys(items).reduce(
      (acc: ItemsInTaskColumn, key) => {
        acc[key] = items[key].filter((item) => item.id !== id);
        return acc;
      },
      {
        toDo: [],
        inProgress: [],
        done: [],
      } as ItemsInTaskColumn
    );
    setItems(filteredItems);
    updateItemsToLocalStorage(filteredItems);
  };

  return {
    handleAddTodo,
    handleDeleteTodo,
  };
}
