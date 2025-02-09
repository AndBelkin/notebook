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

const LoginLayout: FC = () => {
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginUpdate = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
  const passwordUpdate = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const passwordInput = <InputText type="password" label="your password" value={password} onChange={passwordUpdate} />;
  const clickBack = () => {
    setSelectUser(null);
  };
  const buttonBack = (
    <Button type="outline" onClick={clickBack}>
      Back
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
      <Title level="h2">Welcome to notebook</Title>
      <Title level="h6">Your easy task manager</Title>
      <InputText label="your login" value={login} onChange={loginUpdate} disabled={selectUser ? true : false} />
      {selectUser ? passwordInput : null}
      <div className="login-page-btns">
        <Button onClick={clickButton}>Continue with login</Button>
        {selectUser ? buttonBack : null}
      </div>
      <p className="text_small">
        If you have not an account, click{" "}
        <NavLink to="/register" className="link">
          this link
        </NavLink>
      </p>
    </Form>
  );
};

export default LoginLayout;
