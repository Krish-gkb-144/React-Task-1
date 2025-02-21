import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/home" replace /> : <Outlet />;
};

export default AuthRouter;
