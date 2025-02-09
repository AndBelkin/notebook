import { FC, ReactElement } from "react";
import "./Button.css";

interface ButtonProps {
  children?: string;
  beforeIcon?: ReactElement;
  afterIcon?: ReactElement;
  type?: "solid" | "outline" | "icon";
  className?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const buttonStyle = `${props.className || ""} ${props.type || "solid"}`;
  return (
    <button className={buttonStyle} onClick={props.onClick}>
      {props.beforeIcon || null}
      {props.children}
      {props.afterIcon || null}
    </button>
  );
};

export default Button;
