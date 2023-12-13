import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./components/pages/Admin/createAdmin";
import ProductDetail from "./components/pages/productDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
