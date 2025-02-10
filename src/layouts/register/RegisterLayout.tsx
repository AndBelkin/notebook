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
import { FormattedMessage } from "react-intl";

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
      <Title level="h2">
        <FormattedMessage id="registerNewAccount" />
      </Title>
      <Title level="h6">
        <FormattedMessage id="forNotebook" />
      </Title>
      <InputText label={<FormattedMessage id="yourLogin" />} value={login} onChange={loginUpdate} />
      <InputText
        type="password"
        label={<FormattedMessage id="yourPassword" />}
        value={password}
        onChange={passwordUpdate}
      />
      <Button onClick={clickButton}>{<FormattedMessage id="createNewAccountMsg" />}</Button>
      <p className="text_small">
        {<FormattedMessage id="ifHaveLogin" />}
        <NavLink to="/login" className="link">
          {<FormattedMessage id="thisLink" />}
        </NavLink>
      </p>
    </Form>
  );
};

export default RegisterLayout;
