import { FC } from "react";
import { CiTimer } from "react-icons/ci";

interface FinishByBoxProps {
  date: string;
}

const FinishByBox: FC<FinishByBoxProps> = ({ date }: FinishByBoxProps) => {
  return (
    <div className="todo-item-info-line">
      <CiTimer />
      <p>{`Finish by: ${date}`}</p>
    </div>
  );
};

export default FinishByBox;
