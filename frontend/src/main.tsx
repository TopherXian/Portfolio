import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
