import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserTodo } from "../../app/todoSlice/todoSlice";
import Title from "../../components/title/Title";
import TodoList from "./TodoList";
import "./TodoListView.css";

const TodoListView: FC = () => {
  const todoList = useAppSelector(selectUserTodo);
  return (
    <section className="todo-list">
      <Title level="h2">Your todo list</Title>
      <div className="todo-list-header-btns">
        <p className="btn">Sort</p>
        <p className="btn">Search</p>
        <p className="btn">See all</p>
      </div>
      <TodoList todos={todoList} />
      <p className="todo-list-counter">{`${todoList.filter((item) => item.isDone === true).length}/${
        todoList.length
      } complete`}</p>
    </section>
  );
};

export default TodoListView;
