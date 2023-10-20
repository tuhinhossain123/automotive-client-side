import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Route";
import AuthProvider from "./Pages/Provider/AuthProvider";
import CardProvider from "./Pages/Provider/CardProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CardProvider>
        <RouterProvider router={router}></RouterProvider>
      </CardProvider>
    </AuthProvider>
  </React.StrictMode>
);
