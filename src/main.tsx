import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import AppLayout from "@/ui/AppLayout";
import Home from "@/pages/Home";
import Integrantes from "@/pages/Integrantes";
import Fotos from "@/pages/Fotos";
import Contato from "@/pages/Contato";

const router = createBrowserRouter([
  { element: <AppLayout />, children: [
    { path: "/", element: <Home /> },
    { path: "/integrantes", element: <Integrantes /> },
    { path: "/fotos", element: <Fotos /> },
    { path: "/contato", element: <Contato /> }
  ]}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
