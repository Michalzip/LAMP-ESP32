import React from "react";
import Home from "./pages/Home";
import { useRoutes } from "react-router-dom";

const App = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
};

export default App;
