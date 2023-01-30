import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ProductsGallery from "./pages/ProductsGallery";
import ResourcesDiagram from "./pages/ResourcesDiagram";
import UsersTable from "./pages/UsersTable";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/challenge-1",
    element: <ProductsGallery />,
  },
  {
    path: "/challenge-2",
    element: <UsersTable />,
  },
  {
    path: "/challenge-3",
    element: <ResourcesDiagram />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
