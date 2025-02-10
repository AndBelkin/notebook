import store from "../../app/store";
import { TodoItemType } from "../../app/todoSlice";

export const createTodoItem = (title: string, description: string, finishBy: string | null): TodoItemType => {
  const author = store.getState().auth.user!.login;
  return { id: Math.random(), title, description, isDone: false, author, created: getTodayFullDate(), finishBy };
};

export const getTodayDate = () => {
  return new Date().toISOString().substring(0, 10);
};

const getTodayFullDate = () => {
  const today = new Date();
  const date = new Date().toISOString().substring(0, 10);
  const time = today.toLocaleTimeString().split(":").slice(0, 2).join(":");
  return `${date} ${time}`;
};
