import { FC, ReactElement } from "react";
import { IconType } from "react-icons";
import "./Button.css";

interface ButtonProps {
  children: string;
  beforeIcon?: ReactElement<IconType>;
  afterIcon?: ReactElement<IconType>;
  className?: string;
  type?: "solid" | "outline" | "icon";
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const buttonStyle = `btn btn_${props.type || "solid"} ${props.className || ""}`;
  return (
    <button className={buttonStyle} onClick={props.onClick}>
      {props.beforeIcon}
      {props.children}
      {props.afterIcon}
    </button>
  );
};

export default Button;
