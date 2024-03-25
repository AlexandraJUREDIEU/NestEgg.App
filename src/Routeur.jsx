import { Controller } from "@svgdotjs/svg.js";
import React, { Fragment } from "react";
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
import MyAccount from "./pages/MyAccount/MyAccount";
import Summary from "./pages/Summary/Summary";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root />
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

function Root() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/AddTransaction">go to AddTransaction</NavLink>
          <NavLink to="/Contact">go to Contact</NavLink>
          <NavLink to="/Dashboard">go to Dashboard</NavLink>
          <NavLink to="/Home">go to Home</NavLink>
          <NavLink to="/Summary">go to Summary</NavLink>
          <NavLink to="/MyAccount">go to MyAccount</NavLink>
        </nav>
        <div>
          <Outlet />
        </div>
      </header>
    </>
  );
}

function Routeur() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routeur;
