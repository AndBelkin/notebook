import { FC } from "react";
import { GrLanguage } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeLang } from "../../../app/appSlice/appSlice";

const SelectLang: FC = () => {
  const lang = useAppSelector((state) => state.app.lang);
  const dispatch = useAppDispatch();
  return (
    <div className="select-lang" onClick={() => dispatch(changeLang())}>
      <GrLanguage />
      {lang}
    </div>
  );
};

export default SelectLang;
