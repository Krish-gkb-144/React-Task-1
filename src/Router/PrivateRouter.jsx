import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return !isAuth ? <Navigate to="/" replace /> : <Outlet />;
};

export default PrivateRouter;
