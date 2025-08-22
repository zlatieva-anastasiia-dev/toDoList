import { DndContext, DragOverlay } from "@dnd-kit/core";

import { SortableTaskColumn } from "./SortableTaskColumn";
import { Card } from "../../../components";
import { useDragAndDrop } from "./hooks/useDragAndDrop";

import { Dispatch, SetStateAction } from "react";
import { ToDoItem } from "../types";

type Props = {
  items: Record<string, Array<ToDoItem>>;
  setItems: Dispatch<SetStateAction<Record<string, ToDoItem[]>>>;
  handleDeleteTodo: (id: string) => void;
};
export function DragAndDropBoard({ items, setItems, handleDeleteTodo }: Props) {
  const {
    activeItem,
    sensors,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
  } = useDragAndDrop({ items, setItems });

  return (
    <div className="m-5">
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        sensors={sensors}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <SortableTaskColumn
            items={items.toDo}
            column={{ id: "toDo", title: "To do" }}
            handleDeleteTodo={handleDeleteTodo}
          />
          <SortableTaskColumn
            items={items.inProgress}
            column={{ id: "inProgress", title: "In Progress" }}
            handleDeleteTodo={handleDeleteTodo}
          />
          <SortableTaskColumn
            items={items.done}
            column={{ id: "done", title: "Done" }}
            handleDeleteTodo={handleDeleteTodo}
          />
        </div>
        <DragOverlay
          dropAnimation={{
            duration: 500,
            easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
          }}
        >
          {activeItem ? <Card>{activeItem.name}</Card> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
