import { FC } from "react";
import MainRouter from "./routes/MainRouter";
import Header from "./views/header/Header";

const NotebookApp: FC = () => {
  return (
    <div className="notebook-app app container">
      <Header />
      <MainRouter />
    </div>
  );
};

export default NotebookApp;
