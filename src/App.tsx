import { useMemo, useState } from "react";
import ToDoItemsList from "./features/ToDo/ToDoItemsList";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { Box } from "./components/Box";

import { Heading } from "./components/Heading";
import { Button } from "./components/Button";
import { useToDoList } from "./features/ToDo/hooks/useToDoList";
import { Select } from "./components/Select";

export type ToDoItem = {
  id: string;
  value: string;
  isCompleted: boolean;
};

const options = [
  { value: "all", label: "All tasks" },
  { value: "completed", label: "Completed tasks" },
  { value: "incomplete", label: "Non completed task" },
  { value: "sortByCompleted", label: "Sorted tasks by completed" },
];

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [filter, setFilter] = useState("all");
  const { handleAddTodo, handleRemoveTodo, handleToggleToDo, todoItems } =
    useToDoList();

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "all":
        return todoItems;
      case "completed":
        return todoItems.filter((item) => item.isCompleted);
      case "incomplete":
        return todoItems.filter((item) => !item.isCompleted);
      case "sortByCompleted":
        return todoItems.sort((a, b) => {
          if (a.isCompleted && !b.isCompleted) {
            return -1;
          } else if (!a.isCompleted && b.isCompleted) {
            return 1;
          } else {
            return 0;
          }
        });
      default:
        return todoItems;
    }
  }, [todoItems, filter]);

  const handleAddNewTodo = () => {
    handleAddTodo(newTask);
    setNewTask("");
  };

  return (
    <Box className="main">
      <Box className="mainHeader">
        <Heading>To do List</Heading>
      </Box>
      <Box className="todoInputField">
        <Box className="todoInput">
          <Input
            id="newTodo"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <Label htmlFor="newTodo">Type to do</Label>
        </Box>
        <Button className="todoButton" onClick={handleAddNewTodo}>
          Add todo
        </Button>
      </Box>
      <Box className="todoList">
        <Box>
          <Heading as="h2">To Do</Heading>
          <Select
            onChange={(e) => setFilter(e.target.value)}
            options={options}
          />
        </Box>
        <ToDoItemsList
          handleRemoveTodo={handleRemoveTodo}
          handleToggleTodo={handleToggleToDo}
          toDoItems={filteredTodos}
        />
      </Box>
    </Box>
  );
}

export default App;
