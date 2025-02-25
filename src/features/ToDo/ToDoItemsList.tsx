import { type ToDoItem } from "../../App";
import { Draggable } from "../../Draggable";
import { Droppable } from "../../Droppable";

import ToDoItemInput from "./ToDoItem";

type Props = {
  toDoItems: ToDoItem[];
  id?: string;
};

export function ToDoItemsList({ id, toDoItems }: Props) {
  return (
    <Droppable id={id}>
      {toDoItems.map((toDoItem) => (
        <Draggable key={toDoItem.id} id={toDoItem.id}>
          <ToDoItemInput toDoItem={toDoItem} />
        </Draggable>
      ))}
    </Droppable>
  );
}
