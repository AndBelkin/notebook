import { FC } from "react";
import { TodoItemType } from "../../app/todoSlice";
import Button from "../button/Button";
import Title from "../title/Title";
import "./TodoItemFull.css";

interface TodoItemFullProps {
  element: TodoItemType;
  onExit: () => void;
}

const TodoItemFull: FC<TodoItemFullProps> = (props: TodoItemFullProps) => {
  const { element, onExit } = props;
  return (
    <section className="todo-item-full">
      <Title level="h2">{element.title}</Title>
      <p className="todo-item-full-created">Created: {element.created}</p>
      <p>Description:</p>
      <p className="todo-item-full-description">{element.description}</p>
      <p className="todo-item-full-finishBy">Finish by: {element.finishBy}</p>
      <Button onClick={onExit}>Close</Button>
    </section>
  );
};

export default TodoItemFull;
