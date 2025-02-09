import { FC } from "react";
import CreateNewTask from "../../views/create-new-task/CreateNewTask";
import TodoList from "../../views/todo-list/TodoList";
import "./ListLayout.css";

const ListLayout: FC = () => {
  return (
    <main className="list-page">
      <CreateNewTask />
      <TodoList />
    </main>
  );
};

export default ListLayout;
