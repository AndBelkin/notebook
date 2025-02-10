import { TodoItemType } from "../../app/todoSlice";

enum SortMethods {
  allTask = "All task",
  complete = "Current",
  today = "Today",
}

export const sortMethods = [SortMethods.allTask, SortMethods.complete, SortMethods.today];

export const getSortTodoList = (list: TodoItemType[], method: string) => {
  switch (method) {
    case SortMethods.allTask:
      return list;
    case SortMethods.complete:
      return list.filter((item) => item.isDone === false);
    case SortMethods.today: {
      const today = new Date().toISOString().substring(0, 10);
      console.log(today);
      return list.filter((item) => item.finishBy === today);
    }
    default:
      return [];
  }
};
