import { type ToDoItem } from "../../App";
import ToDoItemInput from "./ToDoItem";

type Props = {
  toDoItems: ToDoItem[];
  handleToggleTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
};

export default function ToDoItemsList({
  handleToggleTodo,
  handleRemoveTodo,
  toDoItems,
}: Props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {toDoItems.map((toDoItem) => (
        <ToDoItemInput
          key={toDoItem.id}
          toDoItem={toDoItem}
          handleToggleTodo={handleToggleTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </ul>
  );
}
