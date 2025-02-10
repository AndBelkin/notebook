import { FC, useState } from "react";
import InputText from "../../components/input-text/InputText";
import Title from "../../components/title/Title";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import { useAppDispatch } from "../../app/hooks";
import { addNewTodo } from "../../app/todoSlice/todoSlice";
import { createTodoItem, getTodayDate } from ".";
import InputDate from "../../components/input-date/InputDate";
import Form from "../../components/form/Form";
import InputCheckbox from "../../components/input-checkbox/InputCheckbox";
import "./CreateNewTask.css";
import { FormattedMessage } from "react-intl";

const CreateNewTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [finishBy, setFinishBy] = useState<string>(getTodayDate());
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const createTask = () => {
    if (title.length < 6) return alert("The task name must contain at least six characters.");
    if (isChecked && !finishBy) return alert("No date has been specified for completing the task.");
    dispatch(addNewTodo(createTodoItem(title, description, finishBy)));
    setTitle("");
    setDescription("");
    setFinishBy(getTodayDate());
  };
  const dateElement = (
    <InputDate
      label={<FormattedMessage id="finishBy" />}
      value={finishBy}
      onChange={(e) => setFinishBy(e.target.value)}
    />
  );

  return (
    <section className="create-new-task">
      <Form className="create-new-task-form">
        <Title level="h2">
          <FormattedMessage id="createNewTask" />
        </Title>
        <InputText
          label={<FormattedMessage id="newTodoTitle" />}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          label={<FormattedMessage id="newTodoDescription" />}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputCheckbox
          label={<FormattedMessage id="setDay" />}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {isChecked ? dateElement : null}
        <Button onClick={createTask}>{<FormattedMessage id="createTask" />}</Button>
      </Form>
    </section>
  );
};

export default CreateNewTask;
