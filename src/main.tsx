import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NotebookApp from "./NotebookApp";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <NotebookApp />
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
