import { FC } from "react";
import "./ListLayout.css";
import { useAppSelector } from "../../app/hooks";
import { selectAllTodo } from "../../app/todoSlice/todoSlice";
import TodoItem from "../../components/todo-item/TodoItem";

const ListLayout: FC = () => {
  const todoList = useAppSelector(selectAllTodo);
  const renderTodoList = todoList.map((todo, key) => <TodoItem element={todo} key={key} />);
  return (
    <main className="list-page">
      <div className="list-page-header">
        <h2>Your todo list</h2>
        <div className="list-page-header-btns">
          <p className="btn">Sort</p>
          <p className="btn">Search</p>
          <p className="btn">See all</p>
        </div>
      </div>
      <div className="list-page-todos">{renderTodoList}</div>
      <p className="list-page-counter">{`${todoList.filter((item) => item.isDone === true).length}/${
        todoList.length
      } complete`}</p>
    </main>
  );
};

export default ListLayout;
