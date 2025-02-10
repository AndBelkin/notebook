import { FC, useState } from "react";
import { GrSort } from "react-icons/gr";
import "./DropDown.css";
import { FormattedMessage } from "react-intl";

interface DropDownProps {
  items: string[];
  getValue: (value: string) => void;
}

const DropDown: FC<DropDownProps> = ({ items, getValue }: DropDownProps) => {
  const [mainItem, setMainItem] = useState<string>(items[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickHandler = (item: string) => {
    setMainItem(item);
    setIsOpen(false);
    getValue(item);
  };
  const dropBoxStyle = `drop-down-box ${isOpen ? "open" : ""}`;
  const getList = items.filter((item) => item !== mainItem);
  const renderList = getList.map((item, key) => (
    <p key={key} onClick={() => clickHandler(item)}>
      <FormattedMessage id={item} />
    </p>
  ));
  return (
    <div className={dropBoxStyle} onMouseLeave={() => setIsOpen(false)}>
      <div className="drop-down-main-item" onClick={() => setIsOpen(!isOpen)}>
        <FormattedMessage id={mainItem} />
        <GrSort />
      </div>
      <div className="drop-down-list">{renderList}</div>
    </div>
  );
};

export default DropDown;
