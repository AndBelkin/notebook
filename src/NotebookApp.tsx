import { FC, useEffect } from "react";
import MainRouter from "./routes/MainRouter";
import Header from "./views/header/Header";
import { useAppSelector } from "./app/hooks";

const NotebookApp: FC = () => {
  const darkMode = useAppSelector((state) => state.app.darkMode);
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) body!.classList.add("dark");
    else body!.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="notebook-app app">
      <div className="container">
        <Header />
        <MainRouter />
      </div>
    </div>
  );
};

export default NotebookApp;
