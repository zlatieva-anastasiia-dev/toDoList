import { useState } from "react";
import ToDoItemsList from "./features/ToDo/ToDoItemsList";
import Input from "./components/Input";
import Label from "./components/Label";
import Box from "./components/Box";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import Button from "./components/Button";
import { useToDoList } from "./features/ToDo/hooks/useToDoList";

export type ToDoItem = {
  id: string;
  value: string;
  isCompleted: boolean;
};

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [showCompletedTasks, setShowCompletedTasks] = useState<boolean>(false);
  const { handleAddTodo, todoItems } = useToDoList();

  const handleSetNewTodo = () => {
    handleAddTodo(newTask);
    setNewTask("");
  };

  const handleFilterOnlyCheckedItems = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };

  const filteredItems = showCompletedTasks
    ? todoItems.filter((toDoItem) => toDoItem.isCompleted)
    : todoItems;

  return (
    <Box className="main">
      <Box className="mainHeader">
        <Header>To do List</Header>
      </Box>
      <Box className="todoInputField">
        <Box className="todoInput">
          <Input
            id="newTodo"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Label htmlFor="newTodo">Type to do</Label>
        </Box>
        <Button className="todoButton" onClick={handleSetNewTodo}>
          Add todo
        </Button>
      </Box>

      <Box className="todoList">
        <Box>
          <Header>To Do</Header>
          <Checkbox
            id="newTodo"
            value="filter only checked items"
            onChange={handleFilterOnlyCheckedItems}
          />
          <Label htmlFor="newTodo">show only completed items</Label>
        </Box>
        <ToDoItemsList toDoItems={[...filteredItems]} />
      </Box>
    </Box>
  );
}

export default App;
