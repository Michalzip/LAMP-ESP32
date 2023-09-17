import React from "react";
import HomePage from "../pages/HomePage";
import { useRoutes } from "react-router-dom";
import CustomColorPage from "../pages/CustomColorPage";
import SectionColorPage from "../pages/SectionColorPage";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/custom-color", element: <CustomColorPage /> },
    { path: "/section-color", element: <SectionColorPage /> },
  ]);

  return routes;
};

export default Routes;
