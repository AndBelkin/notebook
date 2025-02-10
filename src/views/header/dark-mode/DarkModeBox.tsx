import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeDarkMode } from "../../../app/appSlice/appSlice";
import { CiBrightnessUp, CiDark } from "react-icons/ci";

const DarkModeBox: FC = () => {
  const { darkMode } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const renderIcon = darkMode ? <CiDark /> : <CiBrightnessUp />;
  return (
    <div className="header-dark-mode-box" onClick={() => dispatch(changeDarkMode())}>
      {renderIcon}
    </div>
  );
};

export default DarkModeBox;
