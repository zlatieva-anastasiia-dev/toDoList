import { ReactNode } from "react";

type TaskColumnProps = {
  children: ReactNode;
  column: {
    id: string;
    title: string;
  };
};

export default function TaskColumn({ children, column }: TaskColumnProps) {
  return (
    <div className="task-column" id={column.id}>
      <h2>{column.title}</h2>
      {children}
    </div>
  );
}
