import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, TodoItemType } from ".";
import { RootState } from "../store";

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<TodoItemType>) => {
      state.push(action.payload);
    },
    changeTodo: (state, action: PayloadAction<TodoItemType>) => {
      const idx = state.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1) state[idx] = action.payload;
    },
    delTodo: (state, action: PayloadAction<TodoItemType>) => {
      const idx = state.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1) state.splice(idx);
    },
  },
});

export const selectAllTodo = (state: RootState) => state.todos;
export const selectUserTodo = (state: RootState) =>
  state.todos.filter((todo) => todo.author === state.auth.user?.login);
export const { addNewTodo, delTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
