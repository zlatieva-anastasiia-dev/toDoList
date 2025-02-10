import { useState } from "react";

import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { Box } from "./components/Box";

import { Heading } from "./components/Heading";
import { Button } from "./components/Button";

import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import { Card } from "./components/Card";
import TaskColumn from "./features/ToDo/TaskColumn";

export type ToDoItem = {
  id: string;
  name: string;
  parentId: string;
};

const columns = [
  {
    id: "1",
    title: "To do",
  },
  { id: "2", title: "In progress" },
  { id: "3", title: "Done" },
];

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [elementsToDrag, setElementsToDrag] = useState<Array<ToDoItem>>([]);

  const handleAddTodo = (newTask: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      name: newTask,
      parentId: "1",
    };

    setElementsToDrag([...elementsToDrag, newTodo]);
  };

  const handleAddNewTodo = () => {
    handleAddTodo(newTask);
    setNewTask("");
  };

  const handleDragEnd = (event: any) => {
    const { over, active } = event;

    console.log(event);
    if (over && active) {
      setElementsToDrag((prevElements) =>
        prevElements.map((element) => {
          if (element.id === active.id) {
            return { ...element, parentId: over.id };
          }
          return element;
        })
      );
    }
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
        <Button className="todoButton" onClick={handleAddNewTodo}>
          Add todo
        </Button>
      </Box>
      <DndContext onDragEnd={handleDragEnd}>
        <Box style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          {elementsToDrag.map((item) => {
            if (item.parentId !== "") {
              return null;
            }
            return (
              <Draggable id={item.id} key={item.id}>
                {item.name}
              </Draggable>
            );
          })}
        </Box>
        <Box style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          {columns.map((column) => (
            <Droppable key={column.id} id={column.id}>
              <TaskColumn column={column}>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {elementsToDrag.map((item) => {
                    if (item.parentId === column.id) {
                      return (
                        <Draggable key={item.id} id={item.id}>
                          <Card>{item.name}</Card>
                        </Draggable>
                      );
                    }
                    return null;
                  })}
                </Box>
              </TaskColumn>
            </Droppable>
          ))}
        </Box>
      </DndContext>
    </Box>
  );
}

export default App;
