import { FC } from "react";
import MainRouter from "./routes/MainRouter";
import Header from "./views/header/Header";
import { useAppSelector } from "./app/hooks";

const NotebookApp: FC = () => {
  const darkMode = useAppSelector((state) => state.app.darkMode);
  const appStyle = `notebook-app app container ${darkMode ? "dark" : ""}`;
  return (
    <div className={appStyle}>
      <Header />
      <MainRouter />
    </div>
  );
};

export default NotebookApp;
