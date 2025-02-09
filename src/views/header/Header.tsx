import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import Logo from "../../components/logo/Logo";
import UserNav from "./user-nav/UserNav";
import "./Header.css";

const Header: FC = () => {
  const isAuth = useAppSelector((state) => state.auth);
  return (
    <header className="header">
      <Logo />
      {isAuth.isAuth && isAuth.user ? <UserNav user={isAuth.user} /> : null}
    </header>
  );
};

export default Header;
