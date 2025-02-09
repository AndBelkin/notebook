import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAllTodo } from "../../app/todoSlice/todoSlice";
import TodoItem from "../../components/todo-item/TodoItem";
import "./TodoList.css";
import Title from "../../components/title/Title";

const TodoList: FC = () => {
  const todoList = useAppSelector(selectAllTodo);
  const renderTodoList = todoList.map((todo, key) => <TodoItem element={todo} key={key} />);
  return (
    <section className="todo-list">
      <Title level="h2">Your todo list</Title>
      <div className="todo-list-header-btns">
        <p className="btn">Sort</p>
        <p className="btn">Search</p>
        <p className="btn">See all</p>
      </div>
      <div className="todo-list-items">{renderTodoList}</div>
      <p className="todo-list-counter">{`${todoList.filter((item) => item.isDone === true).length}/${
        todoList.length
      } complete`}</p>
    </section>
  );
};

export default TodoList;
