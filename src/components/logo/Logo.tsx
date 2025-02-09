import { FC } from "react";
import { LuNotebook } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "./Logo.css";
import Title from "../title/Title";

const Logo: FC = () => {
  return (
    <NavLink to="/" className="logo">
      <LuNotebook />
      <Title level="h1">Notebook</Title>
    </NavLink>
  );
};

export default Logo;
