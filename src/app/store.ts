import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import authReducer from "./authSlice/authSlice";
import todoReducer from "./todoSlice/todoSlice";
import appReducer from "./appSlice/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    users: userReducer,
    todos: todoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
