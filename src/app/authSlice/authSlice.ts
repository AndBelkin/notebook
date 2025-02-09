import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser, initialState } from ".";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<AuthUser>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
