import store from "../../app/store";
import { TodoItemType } from "../../app/todoSlice";

export const createTodoItem = (title: string, description: string, finishBy: string | null): TodoItemType => {
  const author = store.getState().auth.user!.login;
  return { id: Math.random(), title, description, isDone: false, author, created: getTodayDate(), finishBy };
};

const getTodayDate = () => {
  const today = new Date();
  const date = today.toLocaleDateString();
  const time = today.toLocaleTimeString().split(":").slice(0, 2).join(":");
  return `${date} ${time}`;
};
