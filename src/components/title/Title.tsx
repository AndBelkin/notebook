import { FC } from "react";
import "./Title.css";

type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  children: string;
  level?: TitleLevel;
}

const Title: FC<TitleProps> = ({ children, level: Tag = "h1" }: TitleProps) => {
  return <Tag>{children}</Tag>;
};

export default Title;
