import {
    Outlet,
  } from "react-router-dom";
import Button from "../composants/Button";
import Navbar from "./Navbar";
import Header from "../composants/Header";
import Footer from "../composants/Footer";

  function Admin() {
    return (
      <>
      <Header
        page1="Dashboard"
        page2="Mapage2"
        page3="Mapage3"
      />
      <Outlet />
        <Button 
          text="Clique moi"
          action= {() => onClick()}
        />
        <Footer />
      </>
    );
  }

  function onClick() {
    alert("Le bouton à été cliqué");
  }

export default Admin;
