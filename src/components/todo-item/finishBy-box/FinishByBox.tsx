import { FC } from "react";
import { CiTimer } from "react-icons/ci";
import { FormattedMessage } from "react-intl";

interface FinishByBoxProps {
  date: string;
}

const FinishByBox: FC<FinishByBoxProps> = ({ date }: FinishByBoxProps) => {
  return (
    <div className="todo-item-info-line">
      <CiTimer />
      <p>
        <FormattedMessage id="finishBy" />
        {`: ${date}`}
      </p>
    </div>
  );
};

export default FinishByBox;
