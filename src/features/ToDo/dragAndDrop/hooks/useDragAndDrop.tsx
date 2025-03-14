import {
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  KeyboardSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";

import { SetStateAction, useState, Dispatch } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { ToDoItem } from "../../types";

type Props = {
  items: Record<string, Array<ToDoItem>>;
  setItems: Dispatch<SetStateAction<Record<string, ToDoItem[]>>>;
};

export const useDragAndDrop = ({ items, setItems }: Props) => {
  const [activeItem, setActiveItem] = useState<ToDoItem | undefined>(undefined);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const findContainerByItemId = (id: UniqueIdentifier) => {
    return Object.keys(items).find((key) =>
      items[key].some((item) => item.id === id)
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }
    const activeContainer = findContainerByItemId(active.id);
    const overContainer = findContainerByItemId(over.id) ?? over.id;

    if (!activeContainer || !overContainer || !activeItem) {
      return;
    }
    const activeIndex = items[activeContainer].findIndex(
      (item) => item.id === active.id
    );

    const overIndex = items[overContainer].findIndex(
      (item) => item.id === over.id
    );

    if (activeContainer === overContainer) {
      setItems((prev) => {
        return {
          ...prev,
          [activeContainer]: arrayMove(
            prev[activeContainer],
            activeIndex,
            overIndex
          ),
        };
      });
    } else if (activeContainer !== overContainer) {
      setItems((prev) => {
        return {
          ...prev,
          [activeContainer]: prev[activeContainer].filter(
            (item) => item.id !== active.id
          ),
          [overContainer]: prev[overContainer].toSpliced(
            overIndex,
            0,
            activeItem
          ),
        };
      });
    }
    setActiveItem(undefined);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) {
      return null;
    }

    const activeContainer = findContainerByItemId(active.id);
    const overContainer = findContainerByItemId(over.id) ?? over.id;

    if (activeContainer === overContainer) {
      return null;
    }
    if (!activeContainer || !overContainer || !activeItem) {
      return;
    }

    const overIndex = items[overContainer].findIndex(
      (item) => item.id === over.id
    );

    if (activeContainer !== overContainer) {
      setItems((prev) => {
        return {
          ...prev,
          [activeContainer]: prev[activeContainer].filter(
            (item) => item.id !== active.id
          ),
          [overContainer]: prev[overContainer].toSpliced(
            overIndex,
            0,
            activeItem
          ),
        };
      });
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const activeItem = Object.values(items)
      .flat()
      .find((item) => item.id === active.id);

    activeItem && setActiveItem(activeItem);
  };

  return {
    items,
    setItems,
    activeItem,
    sensors,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
  };
};
