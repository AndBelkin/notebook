import { FC, useState } from "react";
import InputText from "../../components/input-text/InputText";
import Title from "../../components/title/Title";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import { useAppDispatch } from "../../app/hooks";
import { addNewTodo } from "../../app/todoSlice/todoSlice";
import { createTodoItem } from ".";
import "./CreateNewTask.css";

const CreateNewTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useAppDispatch();
  const createTask = () => {
    if (!title) return alert("Title is empty!");
    dispatch(addNewTodo(createTodoItem(title, description)));
    setTitle("");
    setDescription("");
  };

  return (
    <section className="create-new-task">
      <form className="create-new-task-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <Title level="h2">Create new task</Title>
        <InputText label="New todo title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea label="New todo description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button onClick={createTask}>Create new task</Button>
      </form>
    </section>
  );
};

export default CreateNewTask;
