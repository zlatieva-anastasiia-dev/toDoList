import { ReactNode } from "react";
import { type TaskColumn as TaskColumnType } from "./types";

type TaskColumnProps = {
  children: ReactNode;
  column: TaskColumnType;
};

export default function TaskColumn({ children, column }: TaskColumnProps) {
  return (
    <div
      className="min-h-120 w-3xs rounded-lg  bg-gray-50 dark:bg-gray-800 border-2 border-gray-700  "
      id={column.id}
    >
      <h2 className="dark:text-white text-center h-12 p-3 text-gray-800 font-bold">
        {column.title}
      </h2>
      <div className="p-3 flex justify-center">{children}</div>
    </div>
  );
}
