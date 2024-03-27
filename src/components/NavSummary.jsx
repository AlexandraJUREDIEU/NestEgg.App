// Import 
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

// Styles




// Functions
export default function NavbarSummary(){
    // State
     //Comportement
      //Return
    return ( <>
    <Navbar 
     links={[
         { to: "/stats", text: "Statistiques"},
         { to: "/incoming", text: "A venir"},
         { to: "/saving", text: "Épargne"},
         { to: "/transactions", text: "Transactions"},
     ]} 
 />
 <Outlet/>
     </>)
 };