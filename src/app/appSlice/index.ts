export type AppLanguges = "en" | "ru";

export interface ApplicationState {
  lang: AppLanguges;
  darkMode: boolean;
}

export const initialState: ApplicationState = {
  lang: "en",
  darkMode: false,
};
