import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import About from "./About";
import Login from "./Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
