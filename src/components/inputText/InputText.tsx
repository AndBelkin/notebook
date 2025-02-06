import { ChangeEvent, FC } from "react";
import "./InputText.css";

interface InputTextProps {
  value: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  getValue: (event: string) => void;
}

const InputText: FC<InputTextProps> = (props: InputTextProps) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => props.getValue(event.target.value);
  const renderLabel = () => (props.label ? <label htmlFor="input">{props.label}</label> : false);
  return (
    <div className="input-element">
      {renderLabel()}
      <input
        type="text"
        value={props.value}
        onChange={changeHandler}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </div>
  );
};

export default InputText;
