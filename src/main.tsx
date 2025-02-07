import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NotebookApp from "./NotebookApp";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <NotebookApp />
    </StrictMode>
  </Provider>
);
