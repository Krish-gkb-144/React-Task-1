import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../ReduxToolkit/Hooks";

const PrivateRoute = () => {
  const { isAuthenticated } = useAppSelector((start) => start.auth);
  return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PrivateRoute;
