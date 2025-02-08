import { FC } from "react";
import MainRouter from "./routes/MainRouter";
import Logo from "./components/logo/Logo";

const NotebookApp: FC = () => {
  return (
    <div className="notebook-app app container">
      <header className="container">
        <Logo />
      </header>
      <MainRouter />
    </div>
  );
};

export default NotebookApp;
