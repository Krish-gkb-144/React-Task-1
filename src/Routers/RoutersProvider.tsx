import { createBrowserRouter } from "react-router-dom";
import Auth from "../Auth";
import Home from "../Home";
import PrivateRoute from "./PrivateRoute";
import RouteRedirect from "./RouteRedirect";

const RouterProvider = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [{ path: "/", element: <Auth />, index: true }],
  },
  {
    element: <RouteRedirect />,
    children: [{ path: "/home", element: <Home /> }],
  },
]);

export default RouterProvider;
