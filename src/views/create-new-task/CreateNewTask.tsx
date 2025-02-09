import { FC, useState } from "react";
import InputText from "../../components/input-text/InputText";
import Title from "../../components/title/Title";
import Textarea from "../../components/textarea/Textarea";
import Button from "../../components/button/Button";
import { useAppDispatch } from "../../app/hooks";
import { addNewTodo } from "../../app/todoSlice/todoSlice";
import { TodoItemType } from "../../app/todoSlice";
import store from "../../app/store";
import "./CreateNewTask.css";

const CreateNewTask: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useAppDispatch();
  const createTask = () => {
    if (!title) return alert("Title is empty!");
    const newTodo: TodoItemType = {
      id: Math.random(),
      title,
      description,
      isDone: false,
      author: store.getState().auth.user!.login,
    };
    dispatch(addNewTodo(newTodo));
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
