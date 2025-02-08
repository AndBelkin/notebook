import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import LoginLayout from "../layouts/login/LoginLayout";

const MainRouter: FC = () => {
  const userAuth = useAppSelector((state) => state.auth);
  const indexRoute = userAuth.isAuth ? "/list" : "/login";
  const replace = <Navigate to={indexRoute} replace />;
  return (
    <Routes>
      <Route path="/" element={replace} />
      <Route path="*" element={replace} />
      <Route path="/login" element={!userAuth.isAuth ? <LoginLayout /> : replace} />
      <Route path="/register" element={!userAuth.isAuth ? <></> : replace} />
      <Route path="/list" element={userAuth.isAuth ? <></> : replace} />
    </Routes>
  );
};

export default MainRouter;
