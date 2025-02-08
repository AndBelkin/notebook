export interface User {
  id: number;
  login: string;
  password: string;
}

export const initialState: User[] = [
  {
    id: 0,
    login: "admin",
    password: "admin",
  },
];
