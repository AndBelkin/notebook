import { ChangeEvent, FC, useState } from "react";
import Form from "../../components/form/Form";
import InputText from "../../components/input-text/InputText";
import Button from "../../components/button/Button";
import { TodoItemType } from "../../app/todoSlice";
import TodoList from "../todo-list/TodoList";
import { filterTasks } from ".";
import "./SearchTask.css";
import Title from "../../components/title/Title";

interface SearchTaskProps {
  todos: TodoItemType[];
  onExit?: () => void;
}

const SearchTask: FC<SearchTaskProps> = ({ todos, onExit }: SearchTaskProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchTasks, setSearchTasks] = useState<TodoItemType[]>([]);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    if (newInput.length >= 3) setSearchTasks(filterTasks(todos, newInput));
    else setSearchTasks([]);
    setSearchInput(newInput);
  };
  return (
    <Form className="search-page">
      <Title level="h4">Search your tasks</Title>
      <InputText label="Search" value={searchInput} onChange={changeHandler} />
      <TodoList todos={searchTasks} />
      {onExit ? <Button onClick={onExit}>Close</Button> : null}
    </Form>
  );
};

export default SearchTask;
