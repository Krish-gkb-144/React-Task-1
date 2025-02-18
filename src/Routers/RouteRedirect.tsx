import React from "react";
import { useAppSelector } from "../ReduxToolkit/Hooks";
import { Navigate, Outlet } from "react-router-dom";

const RouteRedirect = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return !isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default RouteRedirect;
