import { createSlice } from "@reduxjs/toolkit";
import { initialState } from ".";
import { LANG } from "../../i18n/locales";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeLang: (state) => {
      if (state.lang === LANG.ENGLISH) state.lang = LANG.RUSSIAN;
      else state.lang = LANG.ENGLISH;
    },
    changeDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeLang, changeDarkMode } = appSlice.actions;
export default appSlice.reducer;
