import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { ToDoItem } from "../../App";
import TaskColumn from "../ToDo/TaskColumn";
import { Box } from "../../components/Box";

type Props = {
  items: Array<ToDoItem>;
  column: {
    id: string;
    title: string;
  };
};

export function Container({ items, column }: Props) {
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
          <Box style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.name}
              </SortableItem>
            ))}
          </Box>
        </TaskColumn>
      </div>
    </SortableContext>
  );
}
