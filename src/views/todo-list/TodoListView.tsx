import { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserTodo } from "../../app/todoSlice/todoSlice";
import Title from "../../components/title/Title";
import TodoList from "./TodoList";
import "./TodoListView.css";
import { Modal } from "../../components/modal/Modal";
import SearchTask from "../search-task/SearchTask";
import DropDown from "../../components/drop-down/DropDown";
import { getSortTodoList, sortMethods } from ".";
import { FormattedMessage } from "react-intl";

const TodoListView: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [sortMethod, setSortMethod] = useState<string>(sortMethods[0]);
  const todoList = useAppSelector(selectUserTodo);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(sortMethod);
  return (
    <section className="todo-list">
      <Title level="h2">
        <FormattedMessage id="yourTodoList" />
      </Title>
      <div className="todo-list-header-btns">
        <p className="btn" onClick={openModal}>
          <FormattedMessage id="search" />
        </p>
        <DropDown items={sortMethods} getValue={(item) => setSortMethod(item)} />
      </div>
      <TodoList todos={getSortTodoList(todoList, sortMethod)} />
      <p className="todo-list-counter">
        {`${todoList.filter((item) => item.isDone === true).length}/${todoList.length}`}{" "}
        <FormattedMessage id="complete" />
      </p>
      <Modal isOpen={isModalOpen} onExit={closeModal}>
        <SearchTask todos={todoList} onExit={closeModal} />
      </Modal>
    </section>
  );
};

export default TodoListView;
