import { FC } from "react";
import CreateNewTask from "../../views/create-new-task/CreateNewTask";
import "./ListLayout.css";
import TodoListView from "../../views/todo-list/TodoListView";

const ListLayout: FC = () => {
  return (
    <main className="list-page">
      <CreateNewTask />
      <TodoListView />
    </main>
  );
};

export default ListLayout;
