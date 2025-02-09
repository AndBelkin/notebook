import { ChangeEvent, FC } from "react";
import "./Textarea.css";

interface TextreaProps {
  value: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextreaProps> = (props: TextreaProps) => {
  const style = `textarea-box ${props.className || ""}`;
  const label = props.label ? <label>{props.label}</label> : false;
  return (
    <div className={style}>
      {label}
      <textarea
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
        rows={props.rows || 3}
      />
    </div>
  );
};

export default Textarea;
