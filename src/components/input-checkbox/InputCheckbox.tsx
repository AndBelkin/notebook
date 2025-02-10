import { FC } from "react";
import "./InputCheckbox.css";

interface InputCheckboxProps {
  checked: boolean;
  label: string | React.ReactNode;
  className?: string;
  onChange: () => void;
}

const InputCheckbox: FC<InputCheckboxProps> = (props: InputCheckboxProps) => {
  return (
    <div className={`input-checkbox-box ${props.className || ""}`}>
      <label>{props.label}</label>
      <div className={`checkbox ${props.checked ? "checked" : ""}`} onClick={props.onChange}>
        <div className="checkbox-ball"></div>
      </div>
    </div>
  );
};

export default InputCheckbox;
