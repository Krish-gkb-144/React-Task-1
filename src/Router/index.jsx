import { createBrowserRouter } from "react-router-dom";
import Auth from "../Auth";
import Home from "../Home";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import Layout from "../Layout";

const Router = createBrowserRouter([
  {
    element: <AuthRouter />,
    children: [{ path: "/", element: <Auth />, index: true }],
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        element: <Layout />,
        children: [{ path: "/home", element: <Home /> }],
      },
    ],
  },
]);

export default Router;
