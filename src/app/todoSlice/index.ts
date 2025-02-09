export interface TodoItemType {
  id: number;
  title: string;
  description?: string;
  isDone: boolean;
  author: string;
  created: string;
}

export const initialState: TodoItemType[] = [
  {
    id: 0,
    title: "Default Todo",
    description: "Somebody description...",
    isDone: false,
    author: "admin",
    created: "02/09/2025 13:30:00",
  },
];
