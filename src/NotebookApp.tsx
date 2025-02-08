import { FC } from "react";
import LoginLayout from "./layouts/login/LoginLayout";
import { LuNotebook } from "react-icons/lu";

const NotebookApp: FC = () => {
  return (
    <div className="notebook-app app container">
      <header className="container">
        <p>
          <LuNotebook />
          Notebook
        </p>
      </header>
      <LoginLayout />
    </div>
  );
};

export default NotebookApp;
