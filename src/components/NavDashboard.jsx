// Import
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

// Styles

// Functions
export default function NavbarDashboard(){
    // State
     //Comportement
      //Return
    return ( <>
    <Navbar 
     links={[
         { to: "/profile", text: "Profile"},
         { to: "/addTransaction", text: "Ajouter une transaction"},
         { to: "/summary", text: "Synthèse"},
     ]} 
 />
 <Outlet/>
     </>)
 };