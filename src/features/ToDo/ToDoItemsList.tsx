import { type ToDoItem } from "../../App";
import ToDoItemInput from "./ToDoItem";

type Props = {
  toDoItems: ToDoItem[];
};

export default function ToDoItemsList({ toDoItems }: Props) {
  return (
    <ul style={{ listStyle: "none" }}>
      {toDoItems.map((toDoItem) => (
        <ToDoItemInput key={toDoItem.id} toDoItem={toDoItem} />
      ))}
    </ul>
  );
}
