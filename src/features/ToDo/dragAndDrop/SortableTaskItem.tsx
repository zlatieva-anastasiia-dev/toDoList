import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, Button } from "../../../components";
import { CSSProperties, ReactNode } from "react";
import { TrashIcon } from "@heroicons/react/16/solid";

type Props = {
  handleDelete: () => void;
  children: ReactNode;
  id: string;
};

export function SortableTaskItem({ id, children, handleDelete }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: id });

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} key={id}>
      <Card>
        {children}
        <Button
          className="flex justify-start"
          onPointerDown={(e) => {
            e.stopPropagation();
          }}
          onClick={handleDelete}
        >
          <TrashIcon className="w-5 h-5" />
        </Button>
      </Card>
    </div>
  );
}
