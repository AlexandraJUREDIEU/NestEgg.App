// Import 
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import HeaderStyle from "../styles/HeaderStyle";
// Styles




// Functions
export default function HeaderSummary(){
      // State
       //Comportement
        //Return
      return ( <>
      <HeaderStyle>
      <img src="public\logoSansTexte.png" alt="logo Nest Egg"/>
      <Navbar 
       links={[
           { to: "/stats", text: "Statistiques"},
           { to: "/incoming", text: "A venir"},
           { to: "/saving", text: "Épargne"},
           { to: "/transactions", text: "Transactions"},
       ]} 
   /></HeaderStyle>
   <Outlet/>
       </>)
   };
      