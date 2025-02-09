import { FC, useState } from "react";
import InputText from "../../components/input-text/InputText";
import Title from "../../components/title/Title";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import { useAppDispatch } from "../../app/hooks";
import { addNewTodo } from "../../app/todoSlice/todoSlice";
import { createTodoItem } from ".";
import "./CreateNewTask.css";
import InputDate from "../../components/input-date/InputDate";
import Form from "../../components/form/Form";

const CreateNewTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [finishBy, setFinishBy] = useState<string>("");
  const dispatch = useAppDispatch();
  const createTask = () => {
    if (!title) return alert("Title is empty!");
    dispatch(addNewTodo(createTodoItem(title, description, finishBy)));
    setTitle("");
    setDescription("");
    setFinishBy("");
  };

  return (
    <section className="create-new-task">
      <Form className="create-new-task-form">
        <Title level="h2">Create new task</Title>
        <InputText label="New todo title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea label="New todo description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <InputDate label="Finish by" value={finishBy} onChange={(e) => setFinishBy(e.target.value)} />
        <Button onClick={createTask}>Create new task</Button>
      </Form>
    </section>
  );
};

export default CreateNewTask;
