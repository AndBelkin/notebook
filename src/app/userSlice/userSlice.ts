import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, User } from ".";
import { RootState } from "../store";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const selectAllUsers = (state: RootState) => state.users;
export const getUserIndex = (state: RootState, login: string) => state.users.find((i) => i.login === login);
export const { addNewUser } = userSlice.actions;
export default userSlice.reducer;
