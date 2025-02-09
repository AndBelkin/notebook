import { FC } from "react";

interface FormProps {
  children: React.ReactNode;
  className?: string;
}

const Form: FC<FormProps> = ({ children, className = "" }: FormProps) => {
  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
};

export default Form;
