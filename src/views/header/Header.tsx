import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import Logo from "../../components/logo/Logo";
import UserNav from "./user-nav/UserNav";
import "./Header.css";
import DarkModeBox from "./dark-mode/DarkModeBox";
import SelectLang from "./select-lang/SelectLang";

const Header: FC = () => {
  const isAuth = useAppSelector((state) => state.auth);
  return (
    <header className="header">
      <Logo />
      <div className="header-nav">
        {isAuth.isAuth && isAuth.user ? <UserNav user={isAuth.user} /> : null}
        {isAuth.isAuth && isAuth.user ? null : <DarkModeBox />}
        {isAuth.isAuth && isAuth.user ? null : <SelectLang />}
      </div>
    </header>
  );
};

export default Header;
