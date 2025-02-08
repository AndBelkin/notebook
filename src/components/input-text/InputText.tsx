import { ChangeEvent, FC } from "react";
import "./InputText.css";

interface InputTextProps {
  value: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type?: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FC<InputTextProps> = (props: InputTextProps) => {
  const style = `input-box ${props.className || ""}`;
  const label = props.label ? <label>{props.label}</label> : false;
  return (
    <div className={style}>
      {label}
      <input
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputText;
