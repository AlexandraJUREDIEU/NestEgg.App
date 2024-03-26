import {
    Outlet,
  } from "react-router-dom";
import Button from "../composants/Button";
import Navbar from "./Navbar";

  function Admin() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Button 
          text="Clique moi"
          action= {() => onClick()}
        />
      </>
    );
  }

  function onClick() {
    alert("Le bouton à été cliqué");
  }

export default Admin;
