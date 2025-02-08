import { FC } from "react";
import { LuNotebook } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "./Logo.css";

const Logo: FC = () => {
  return (
    <NavLink to="/" className="logo">
      <LuNotebook />
      <p className="logo-text">Notebook</p>
    </NavLink>
  );
};

export default Logo;
