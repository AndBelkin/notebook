import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeDarkMode, changeLang } from "../../../app/appSlice/appSlice";
import { CiBrightnessUp, CiDark } from "react-icons/ci";

const DarkModeBox: FC = () => {
  const { lang, darkMode } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const renderIcon = darkMode ? <CiDark /> : <CiBrightnessUp />;
  return (
    <>
      <div className="header-dark-mode-box" onClick={() => dispatch(changeDarkMode())}>
        {renderIcon}
      </div>
      <p onClick={() => dispatch(changeLang())}>{lang}</p>
    </>
  );
};

export default DarkModeBox;
