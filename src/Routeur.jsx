import React from "react";
import {
  RouterProvider,
  NavLink,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";

import AddTransaction from "./pages/AddTransaction";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Summary from "./pages/Summary";
import Error from "./pages/Error";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/Admin",
        element: <>
        <Admin />
        </>,
        errorElement: <Error />,
        children: [
          {
            path: "Contact",
            element: <Contact />,
          },
          {
            path: "Summary",
            element: <Summary />,
          },
          {
            path: "Dashboard",
            element: <Dashboard />,
          },
          {
            path: "AddTransaction",
            element: <AddTransaction />,
          },
        ]
      }
    ],
  },
]);


function Routeur() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routeur;