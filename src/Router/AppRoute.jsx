import Card from "../Components/Card";
import Home from "../Components/Home";
import { AllRoute } from "./AllRoute";

export const AppRoute = [
  { path: AllRoute.Home, element: <Home /> },
  { path: AllRoute.Card, element: <Card /> },
];
