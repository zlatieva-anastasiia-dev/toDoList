import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableTaskItem } from "./SortableTaskItem";
import TaskColumn from "../TaskColumn";
import { TaskColumn as TaskColumnType, ToDoItem } from "../types";

type Props = {
  items: Array<ToDoItem>;
  column: TaskColumnType;
  handleDeleteTodo: (id: string) => void;
};

export function SortableTaskColumn({ items, handleDeleteTodo, column }: Props) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <SortableContext
      id={column.id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef}>
        <TaskColumn column={column}>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <SortableTaskItem
                key={item.id}
                id={item.id}
                handleDelete={() => handleDeleteTodo(item.id)}
              >
                {item.name}
              </SortableTaskItem>
            ))}
          </div>
        </TaskColumn>
      </div>
    </SortableContext>
  );
}
