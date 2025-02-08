import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import authReducer from "./authSlice/authSlice";
import todoReducer from "./todoSlice/todoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    todos: todoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
