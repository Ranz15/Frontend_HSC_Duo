import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/pages/User/Login";
import Dashboard from "./components/pages/Admin/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./components/pages/User/productDetail";
import Register from "./components/pages/User/register";
import ListSeller from "./components/pages/Admin/Seller/listSeller";
import Product from "./components/pages/User/product";
import ListCategory from "./components/pages/Admin/Category/listCategory";
import CreateSeller from "./components/pages/Admin/Seller/create";
import CreateCategory from "./components/pages/Admin/Category/create";
import CreateBuyer from "./components/pages/Admin/Buyer/create";
import ListBuyer from "./components/pages/Admin/Buyer/listBuyer";
import ListProduct from "./components/pages/Admin/Product/listProduct";
import CreateProduct from "./components/pages/Admin/Product/create";
import LandingPage from "./components/pages/User/landingPage";
import Transaction from "./components/pages/User/transactionPage";
import ProductCategory from "./components/pages/User/productCategory";
import LoginAdmin from "./components/pages/Admin/Login";

const router = createBrowserRouter([
  // USER SECTION
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user/dashboard",
    element: <LandingPage />,
  },
  {
    path: "/user/product",
    element: <Product />,
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/transaction",
    element: <Transaction />,
  },
  { path: "/product/category/:id", element: <ProductCategory /> },

  // ADMIN SECTION
  // Login
  {
    path: "/admin/login",
    element: <LoginAdmin />,
  },

  // Dashboard
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },

  // Data Seller
  {
    path: "/admin/seller/:id",
    element: <CreateSeller />,
  },
  {
    path: "/admin/list",
    element: <ListSeller />,
  },

  // Data Category
  {
    path: "/admin/category/:id",
    element: <CreateCategory />,
  },
  {
    path: "/admin/category/list",
    element: <ListCategory />,
  },

  // Data Buyer
  {
    path: "/admin/buyer/:id",
    element: <CreateBuyer />,
  },
  {
    path: "/admin/buyer/list",
    element: <ListBuyer />,
  },

  // Data Product
  {
    path: "/admin/product/:id",
    element: <CreateProduct />,
  },
  {
    path: "/admin/product/list",
    element: <ListProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
