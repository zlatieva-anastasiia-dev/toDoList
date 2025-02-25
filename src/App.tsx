import { useState } from "react";

import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { Box } from "./components/Box";

import { Heading } from "./components/Heading";
import { Button } from "./components/Button";

import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { Card } from "./components/Card";

import { Container } from "./features/dragAndDrop/Container";

import { useDragAndDrop } from "./features/dragAndDrop/hooks/useDragAndDrop";

export type ToDoItem = {
  id: string;
  name: string;
};

function App() {
  const [newTask, setNewTask] = useState<string>("");

  const {
    items,
    activeItem,
    setItems,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
  } = useDragAndDrop();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleAddTodo = () => {
    const newTodo: ToDoItem = {
      id: crypto.randomUUID(),
      name: newTask,
    };
    setItems((prev) => {
      return { ...prev, toDo: [...prev["toDo"], newTodo] };
    });
    setNewTask("");
  };

  return (
    <Box className="main">
      <Box className="mainHeader">
        <Heading>Awesome Drag and Drop To do List</Heading>
      </Box>
      <Box className="todoInputField">
        <Box className="todoInput">
          <Label htmlFor="newTodo">Let's add to do</Label>
          <Input
            id="newTodo"
            value={newTask}
            placeholder="Type to do"
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
        </Box>
        <Button className="todoButton" onClick={handleAddTodo}>
          Add todo
        </Button>
      </Box>
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        sensors={sensors}
      >
        <Box style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          <Container
            items={items.toDo}
            column={{ id: "toDo", title: "To do" }}
          />
          <Container
            items={items.inProgress}
            column={{ id: "inProgress", title: "In Progress" }}
          />
          <Container
            items={items.done}
            column={{ id: "done", title: "Done" }}
          />
        </Box>
        <DragOverlay>
          {activeItem ? <Card>{activeItem.name}</Card> : null}
        </DragOverlay>
      </DndContext>
    </Box>
  );
}

export default App;
