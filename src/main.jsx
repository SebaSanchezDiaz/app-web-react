import React from "react";
import ReactDOM from "react-dom/client";
import "./Home.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
