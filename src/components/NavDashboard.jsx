import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function NavbarDashboard(){
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