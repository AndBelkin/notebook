import store from "../../app/store";
import { TodoItemType } from "../../app/todoSlice";

export const createTodoItem = (title: string, description: string): TodoItemType => {
  const author = store.getState().auth.user!.login;
  return { id: Math.random(), title, description, isDone: false, author, created: getTodayDate() };
};

const getTodayDate = () => {
  const today = new Date();
  const date = today.toLocaleDateString();
  const time = today.toLocaleTimeString().split(":").slice(0, 2).join(":");
  console.log(time);
  return `${date} ${time}`;
};
