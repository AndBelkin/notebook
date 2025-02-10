export interface TodoItemType {
  id: number;
  title: string;
  description?: string | null;
  isDone: boolean;
  author: string;
  created: string;
  finishBy?: string | null;
}

export const initialState: TodoItemType[] = [
  {
    id: 0,
    title: "Default Todo",
    description: "Somebody description...",
    isDone: false,
    author: "admin",
    created: "2025-02-10 5:04",
    finishBy: "2025-02-10",
  },
];
