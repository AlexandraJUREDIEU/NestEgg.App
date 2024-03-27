import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function NavbarProfile(){
    return ( <>
    <Navbar 
     links={[
         { to: "/account", text: "Mon compte"},
         { to: "/income", text: "Revenus"},
         { to: "/settings", text: "Paramètres"},
         { to: "/fixedCharges", text: "Synthèse"},
     ]} 
 />
 <Outlet/>
     </>)
 };