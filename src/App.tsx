import { RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Router from "./Routers/RoutersProvider";

function App() {
  return (
    <Fragment>
      <RouterProvider router={Router} />
    </Fragment>
  );
}

export default App;
