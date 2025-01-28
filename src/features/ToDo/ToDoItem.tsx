import { type ToDoItem } from "../../App";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Label from "../../components/Label";
import { useToDoList } from "./hooks/useToDoList";
type Props = {
  toDoItem: ToDoItem;
};

export default function ToDoItemInput({ toDoItem }: Props) {
  const { handleRemoveTodo, handleToggleToDo } = useToDoList();
  return (
    <li key={toDoItem.id}>
      <Checkbox
        value={toDoItem.value}
        id={toDoItem.id}
        onChange={() => handleToggleToDo(toDoItem.id)}
      />
      <Label htmlFor={toDoItem.id.toString()}>{toDoItem.value}</Label>
      <Button onClick={() => handleRemoveTodo(toDoItem.id)}>Remove Task</Button>
    </li>
  );
}
