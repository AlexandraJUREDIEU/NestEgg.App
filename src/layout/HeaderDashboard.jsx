// Import 
import Navbar from "../components/Navbar"
import HeaderStyle from "../styles/HeaderStyle"
import { Outlet } from "react-router-dom"

// Styles




// Functions
export default function HeaderDashboard(){
      // State
     //Comportement
      //Return
      return ( <>
      <HeaderStyle>
            <img src="public\logoSansTexte.png" alt="logo Nest Egg"/>
            <Navbar 
             links={[
                { to: "/profile", text: "Profile"},
                { to: "/addTransaction", text: "Ajouter une transaction"},
                { to: "/summary", text: "Synthèse"},
             ]} 
         /></HeaderStyle>
         <Outlet/>
             </>)
}

      