import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./components/pages/Admin/createAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/create",
    element: <Create />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
