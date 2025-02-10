import { FC, useEffect } from "react";
import MainRouter from "./routes/MainRouter";
import Header from "./views/header/Header";
import { useAppSelector } from "./app/hooks";
import { IntlProvider } from "react-intl";
import { messages } from "./i18n/messages";

const NotebookApp: FC = () => {
  const { lang, darkMode } = useAppSelector((state) => state.app);
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) body!.classList.add("dark");
    else body!.classList.remove("dark");
  }, [darkMode]);

  return (
    <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
      <div className="notebook-app app">
        <div className="container">
          <Header />
          <MainRouter />
        </div>
      </div>
    </IntlProvider>
  );
};

export default NotebookApp;
