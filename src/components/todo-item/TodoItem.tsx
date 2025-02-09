import { FC } from "react";
import { TodoItemType } from "../../app/todoSlice";
import { BiCheckbox, BiCheckboxChecked, BiTrash } from "react-icons/bi";
import "./TodoItem.css";
import { useAppDispatch } from "../../app/hooks";
import { changeTodo, delTodo } from "../../app/todoSlice/todoSlice";
import { FaRegCalendar } from "react-icons/fa";
import FinishByBox from "./finishBy-box/FinishByBox";
import Button from "../button/Button";

interface TodoItemProps {
  element: TodoItemType;
}

const TodoItem: FC<TodoItemProps> = ({ element }: TodoItemProps) => {
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
      <div className="todo-item-content">
        <p className="todo-item-title">{element.title}</p>
        <p className="todo-item-description">{element.description}</p>
        <p className="todo-item-info-line">
          <FaRegCalendar />
          {`Created: ${element.created}`}
        </p>
        {element.finishBy && <FinishByBox date={element.finishBy} />}
      </div>
      <div className="todo-item-options">
        <Button type="icon" beforeIcon={<BiTrash />} onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default TodoItem;
