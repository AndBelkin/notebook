import React, { ChangeEvent, FC } from "react";
import "./InputDate.css";

interface InputDateProps {
  value: string;
  label?: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputDate: FC<InputDateProps> = (props: InputDateProps) => {
  const style = `input-box ${props.className || ""}`;
  const label = props.label ? <label>{props.label}</label> : false;
  return (
    <div className={style}>
      {label}
      <input type="date" value={props.value} onChange={props.onChange} disabled={props.disabled} />
    </div>
  );
};

export default InputDate;
