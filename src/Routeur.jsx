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
        path: "AddTransaction",
        element: <AddTransaction />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Summary",
        element: <Summary />,
      },
      {
        path: "MyAccount",
        element: <MyAccount />,
      },
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
