import { createBrowserRouter } from "react-router-dom";
import AuthApi from "../Components/Auth/AuthApi";
import Layout from "../Layout";
import { AllRoute } from "./AllRoute";
import { AppRoute } from "./AppRoute";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
  {
    element: <AuthRouter />,
    children: [{ path: AllRoute.Login, element: <AuthApi />, index: true }],
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <Layout />,
        children: AppRoute,
      },
    ],
  },
]);

export default Router;
