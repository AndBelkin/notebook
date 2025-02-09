import { ChangeEvent, FC, useState } from "react";
import InputText from "../../components/input-text/InputText";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./RegisterLayout.css";
import { User } from "../../app/userSlice";
import { addNewUser } from "../../app/userSlice/userSlice";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import store from "../../app/store";
import Form from "../../components/form/Form";

const RegisterLayout: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginUpdate = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
  const passwordUpdate = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const clickButton = () => {
    if (store.getState().users.find((user) => user.login === login))
      return alert("The user with this login already exists.");
    if (password.length < 6) return alert("The password must contain at least six characters.");
    const newUser: User = { id: Math.random(), login, password };
    dispatch(addNewUser(newUser));
    navigate("/login");
  };
  return (
    <Form className="register-page">
      <Title level="h2">Registration new account</Title>
      <Title level="h6">for Notebook</Title>
      <InputText label="your login" value={login} onChange={loginUpdate} />
      <InputText type="password" label="your password" value={password} onChange={passwordUpdate} />
      <Button onClick={clickButton}>Create new account for Notebook</Button>
      <p className="text_small">
        If you have an account, click{" "}
        <NavLink to="/login" className="link">
          this link
        </NavLink>
      </p>
    </Form>
  );
};

export default RegisterLayout;
