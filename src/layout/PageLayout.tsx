import { Heading } from "../components/Heading";

import { Main } from "./Main";
import { ToDoContent } from "../features/ToDo/ToDoContent";

export function PageLayout() {
  return (
    <Main>
      <Heading className="m-1 font-bold text-gray-800 dark:text-white text-lg">
        Awesome Drag and Drop To do List
      </Heading>
      <ToDoContent />
    </Main>
  );
}
