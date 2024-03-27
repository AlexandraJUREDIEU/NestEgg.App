// Import 
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


// Styles




// Functions
export default function NavbarProfile(){
    // State
     //Comportement
      //Return
    return ( <>
    <Navbar 
     links={[
         { to: "/account", text: "Mon compte"},
         { to: "/income", text: "Revenus"},
         { to: "/settings", text: "Paramètres"},
         { to: "/fixedCharges", text: "Charges fixes"},
     ]} 
 />
 <Outlet/>
     </>)
 };