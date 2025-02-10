import { ChangeEvent, FC, useState } from "react";
import InputText from "../../components/input-text/InputText";
import { getUserIndex } from "../../app/userSlice/userSlice";
import store from "../../app/store";
import { User } from "../../app/userSlice";
import { useAppDispatch } from "../../app/hooks";
import { loginUser } from "../../app/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import "./LoginLayout.css";
import { NavLink } from "react-router-dom";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import { FormattedMessage } from "react-intl";

const LoginLayout: FC = () => {
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginUpdate = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
  const passwordUpdate = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const passwordInput = (
    <InputText
      type="password"
      label={<FormattedMessage id="yourPassword" />}
      value={password}
      onChange={passwordUpdate}
    />
  );
  const clickBack = () => {
    setSelectUser(null);
  };
  const buttonBack = (
    <Button type="outline" onClick={clickBack}>
      <FormattedMessage id="backBtn" />
    </Button>
  );
  const clickButton = () => {
    if (selectUser === null) {
      const user = getUserIndex(store.getState(), login);
      if (!user) alert(`Пользователь ${login} не найден!`);
      else setSelectUser(user);
    } else if (selectUser) {
      if (selectUser.password !== password) alert("Неверный пароль от аккаунта!");
      else {
        dispatch(loginUser({ id: selectUser.id, login: selectUser.login }));
        navigate("/list");
      }
    }
  };
  return (
    <Form className="login-page">
      <Title level="h2">
        <FormattedMessage id="welcomeToApp" />
      </Title>
      <Title level="h6">
        <FormattedMessage id="yourEasyTaskManager" />
      </Title>
      <InputText
        label={<FormattedMessage id="yourLogin" />}
        value={login}
        onChange={loginUpdate}
        disabled={selectUser ? true : false}
      />
      {selectUser ? passwordInput : null}
      <div className="login-page-btns">
        <Button onClick={clickButton}>
          <FormattedMessage id="continueBtn" />
        </Button>
        {selectUser ? buttonBack : null}
      </div>
      <p className="text_small">
        <FormattedMessage id="ifNotLogin" />
        <NavLink to="/register" className="link">
          <FormattedMessage id="thisLink" />
        </NavLink>
      </p>
    </Form>
  );
};

export default LoginLayout;
