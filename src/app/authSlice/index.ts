export interface Auth {
  isAuth: boolean;
  user: AuthUser | null;
}

export interface AuthUser {
  id: number;
  login: string;
}

export const initialState: Auth = { isAuth: false, user: null };
