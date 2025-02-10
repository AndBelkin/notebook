import { TodoItemType } from "../../app/todoSlice";

export const filterTasks = (list: TodoItemType[], value: string): TodoItemType[] => {
  const resultTitle = list.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
  const resultDescription = list.filter((item) => item.description!.toLowerCase().includes(value.toLowerCase()));
  return [...new Set(resultTitle.concat(resultDescription))];
};
