import { useState } from "react";

import { Button, Input, Label } from "../../components";

type Props = {
  handleAddTodo: (newTask: string) => void;
};
export function ToDoInput({ handleAddTodo }: Props) {
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    handleAddTodo(newTask);
    setNewTask("");
  };

  return (
    <div className="flex m-1 gap-3.5 ">
      <div className="relative">
        <Input
          id="newTodo"
          value={newTask}
          placeholder=" "
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          className="rounded-lg px-2.5 pb-2.5 pt-5 w-full text-base text--900 bg-gray-50 dark:bg-gray-800 border-2 border-gray-700 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-space-900 peer "
        />
        <Label
          htmlFor="newTodo"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-grey-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Let's add to do
        </Label>
      </div>
      <Button
        onClick={handleAddTask}
        className="text-white bg-gray-800 hover:bg-gray-700  font-medium rounded-lg text-sm px-5 py-2.5  dark:hover:shadow-lg "
      >
        Add todo
      </Button>
    </div>
  );
}
