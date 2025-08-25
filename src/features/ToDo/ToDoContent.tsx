import { useState } from "react";
import { ToDoInput } from "./ToDoInput";
import { DragAndDropBoard } from "./dragAndDrop/DragAndDropBoard";
import { ItemsInTaskColumn } from "./types";
import { useTodo } from "./hooks/useTodo";

export function ToDoContent() {
  const [items, setItems] = useState<ItemsInTaskColumn>(() => {
    const persistedItems = localStorage.getItem("items");
    return persistedItems
      ? JSON.parse(persistedItems)
      : {
          toDo: [],
          inProgress: [],
          done: [],
        };
  });

  const { handleAddTodo, handleDeleteTodo } = useTodo({ items, setItems });

  return (
    <>
      <ToDoInput handleAddTodo={handleAddTodo} />
      <DragAndDropBoard
        items={items}
        setItems={setItems}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
