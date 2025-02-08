import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import LoginLayout from "../layouts/login/LoginLayout";
import RegisterLayout from "../layouts/register/RegisterLayout";
import ListLayout from "../layouts/list/ListLayout";

const MainRouter: FC = () => {
  const userAuth = useAppSelector((state) => state.auth);
  const indexRoute = userAuth.isAuth ? "/list" : "/login";
  const replace = <Navigate to={indexRoute} replace />;
  return (
    <Routes>
      <Route path="/" element={replace} />
      <Route path="*" element={replace} />
      <Route path="/login" element={!userAuth.isAuth ? <LoginLayout /> : replace} />
      <Route path="/register" element={!userAuth.isAuth ? <RegisterLayout /> : replace} />
      <Route path="/list" element={userAuth.isAuth ? <ListLayout /> : replace} />
    </Routes>
  );
};

export default MainRouter;
