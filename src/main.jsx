import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import Shop from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Products",
        element: <Products></Products>,
      },
      {
        path: "/my-cart",
        element: <Cart></Cart>,
      },
      {
        path: "/About",
        element: <Shop></Shop>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
