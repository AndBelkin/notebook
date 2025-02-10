import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppLanguges, initialState } from ".";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<AppLanguges>) => {
      state.lang = action.payload;
    },
    changeDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeLang, changeDarkMode } = appSlice.actions;
export default appSlice.reducer;
