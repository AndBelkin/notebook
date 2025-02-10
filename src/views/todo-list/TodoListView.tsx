import { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserTodo } from "../../app/todoSlice/todoSlice";
import Title from "../../components/title/Title";
import TodoList from "./TodoList";
import "./TodoListView.css";
import { Modal } from "../../components/modal/Modal";
import SearchTask from "../search-task/SearchTask";

const TodoListView: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const todoList = useAppSelector(selectUserTodo);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="todo-list">
      <Title level="h2">Your todo list</Title>
      <div className="todo-list-header-btns">
        <p className="btn" onClick={openModal}>
          Search
        </p>
      </div>
      <TodoList todos={todoList} />
      <p className="todo-list-counter">{`${todoList.filter((item) => item.isDone === true).length}/${
        todoList.length
      } complete`}</p>
      <Modal isOpen={isModalOpen} onExit={closeModal}>
        <SearchTask todos={todoList} onExit={closeModal} />
      </Modal>
    </section>
  );
};

export default TodoListView;
