import { ChangeEvent, FC, useState } from "react";
import InputText from "../../components/input-text/InputText";
import { getUserIndex } from "../../app/userSlice/userSlice";
import store from "../../app/store";
import { User } from "../../app/userSlice";
import { useAppDispatch } from "../../app/hooks";
import { loginUser } from "../../app/authSlice/authSlice";
import "./LoginLayout.css";

const LoginLayout: FC = () => {
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const loginUpdate = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
  const passwordUpdate = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const passwordInput = <InputText type="password" label="your password" value={password} onChange={passwordUpdate} />;
  const clickButton = () => {
    if (selectUser === null) {
      const user = getUserIndex(store.getState(), login);
      if (!user) alert(`Пользователь ${login} не найден!`);
      else setSelectUser(user);
    } else if (selectUser) {
      if (selectUser.password !== password) alert("Неверный пароль от аккаунта!");
      else {
        dispatch(loginUser({ id: selectUser.id, login: selectUser.login }));
        alert(`Пользователь ${selectUser.login} вошел в систему!`);
        console.log(store.getState().auth);
      }
    }
  };
  return (
    <main className="login-page">
      <h2>Welcome to notebook</h2>
      <h6>Your easy task manager</h6>
      <InputText label="your login" value={login} onChange={loginUpdate} disabled={selectUser ? true : false} />
      {selectUser ? passwordInput : false}
      <button onClick={clickButton}>Continue with login</button>
      <p className="text_small">
        If you have not an account, click <span className="link">this link</span>
      </p>
    </main>
  );
};

export default LoginLayout;
