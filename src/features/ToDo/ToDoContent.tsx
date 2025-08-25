import { useState } from "react";
import { ToDoInput } from "./ToDoInput";
import { DragAndDropBoard } from "./dragAndDrop/DragAndDropBoard";
import { ItemsInTaskColumn } from "./types";
import { useTodo } from "./hooks/useTodo";

export function ToDoContent() {
  const [items, setItems] = useState<ItemsInTaskColumn>(() => {
    const persisTedItems = localStorage.getItem("items");
    return persisTedItems
      ? JSON.parse(persisTedItems)
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
