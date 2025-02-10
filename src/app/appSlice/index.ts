import { LANG } from "../../i18n/locales";

export interface ApplicationState {
  lang: string;
  darkMode: boolean;
}

export const initialState: ApplicationState = {
  lang: LANG.ENGLISH,
  darkMode: false,
};
