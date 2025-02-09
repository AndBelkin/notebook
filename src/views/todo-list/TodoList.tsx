import { FC } from "react";
import TodoItem from "../../components/todo-item/TodoItem";
import { TodoItemType } from "../../app/todoSlice";

interface TodoListProps {
  todos: TodoItemType[];
}

const TodoList: FC<TodoListProps> = ({ todos }: TodoListProps) => {
  const renderTodoList = todos.map((todo, key) => <TodoItem element={todo} key={key} />);
  return <div className="todo-list-items">{renderTodoList}</div>;
};

export default TodoList;
