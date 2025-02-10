import { FC, useState } from "react";
import { TodoItemType } from "../../app/todoSlice";
import { BiCheckbox, BiCheckboxChecked, BiTrash } from "react-icons/bi";
import "./TodoItem.css";
import { useAppDispatch } from "../../app/hooks";
import { changeTodo, delTodo } from "../../app/todoSlice/todoSlice";
import { FaRegCalendar } from "react-icons/fa";
import FinishByBox from "./finishBy-box/FinishByBox";
import Button from "../button/Button";
import { Modal } from "../modal/Modal";
import TodoItemFull from "./TodoItemFull";
import { FormattedMessage } from "react-intl";

interface TodoItemProps {
  element: TodoItemType;
}

const TodoItem: FC<TodoItemProps> = ({ element }: TodoItemProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const checkboxIcon = element.isDone ? <BiCheckboxChecked /> : <BiCheckbox />;
  const changeComplete = () => {
    dispatch(changeTodo({ ...element, isDone: !element.isDone }));
  };
  const deleteTodo = () => dispatch(delTodo(element));
  return (
    <div className={`todo-item ${element.isDone ? "complete" : ""}`}>
      <div className="todo-item-checkbox" onClick={changeComplete}>
        {checkboxIcon}
      </div>
      <div className="todo-item-content" onClick={() => setIsModal(true)}>
        <p className="todo-item-title">{element.title}</p>
        <p className="todo-item-description">{element.description}</p>
        <p className="todo-item-info-line">
          <FaRegCalendar />
          <FormattedMessage id="created" />
          {` ${element.created}`}
        </p>
        {element.finishBy && <FinishByBox date={element.finishBy} />}
      </div>
      <div className="todo-item-options">
        <Button type="icon" beforeIcon={<BiTrash />} onClick={deleteTodo} />
      </div>
      <Modal isOpen={isModal} onExit={() => setIsModal(false)}>
        <TodoItemFull element={element} onExit={() => setIsModal(false)} />
      </Modal>
    </div>
  );
};

export default TodoItem;
