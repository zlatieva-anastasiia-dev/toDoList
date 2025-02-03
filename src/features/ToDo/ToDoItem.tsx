import { type ToDoItem } from "../../App";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Label } from "../../components/Label";

type Props = {
  toDoItem: ToDoItem;
  handleToggleTodo: (id: string) => void;
  handleRemoveTodo: (id: string) => void;
};

export default function ToDoItemInput({
  toDoItem,
  handleToggleTodo,
  handleRemoveTodo,
}: Props) {
  return (
    <li>
      <Checkbox
        id={toDoItem.id}
        checked={toDoItem.isCompleted}
        onChange={() => handleToggleTodo(toDoItem.id)}
      />
      <Label htmlFor={toDoItem.id}>{toDoItem.value}</Label>
      <Button onClick={() => handleRemoveTodo(toDoItem.id)}>Remove Task</Button>
    </li>
  );
}
