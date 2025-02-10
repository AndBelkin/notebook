import { FC } from "react";
import { TodoItemType } from "../../app/todoSlice";
import Button from "../button/Button";
import Title from "../title/Title";
import "./TodoItemFull.css";
import { FormattedMessage } from "react-intl";

interface TodoItemFullProps {
  element: TodoItemType;
  onExit: () => void;
}

const TodoItemFull: FC<TodoItemFullProps> = (props: TodoItemFullProps) => {
  const { element, onExit } = props;
  return (
    <section className="todo-item-full">
      <Title level="h2">{element.title}</Title>
      <p className="todo-item-full-created">
        <FormattedMessage id="created" /> {element.created}
      </p>
      <p>
        <FormattedMessage id="newTodoDescription" />
      </p>
      <p className="todo-item-full-description">{element.description}</p>
      <p className="todo-item-full-finishBy">
        <FormattedMessage id="finishBy" /> {element.finishBy}
      </p>
      <Button onClick={onExit}>
        <FormattedMessage id="close" />
      </Button>
    </section>
  );
};

export default TodoItemFull;
