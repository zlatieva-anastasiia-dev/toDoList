import { type ToDoItem } from "../../App";

type Props = {
  toDoItem: ToDoItem;
};

export default function ToDoItemInput({ toDoItem }: Props) {
  return <div style={{ border: "solid", margin: "4px" }}>{toDoItem.value}</div>;
}
