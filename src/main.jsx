import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./components/pages/Admin/createAdmin";
import ProductDetail from "./components/pages/productDetail";
import Register from "./components/pages/register";
import LandingPage from "./components/pages/landingPage";
import Product from "./components/pages/product";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/admin",
    element: <Create />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
