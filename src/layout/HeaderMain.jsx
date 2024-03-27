// Import 
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"


// Styles




// Functions
export default function Header(){
    // State
     //Comportement
      //Return
    return (<>
    <Navbar
    links={[
        { to: "/", text: "Home" },
        { to: "/concept", text: "Concept" },
        { to: "/aboutUs", text: "Qui sommes nous?" },
        { to: "/pricing", text: "Nos tarifs" },
        { to: "/login", text: "Se connecter" },
        { to: "/signIn", text: "S'inscrire" },
        { to: "/contact", text: "Nous contacter" },
        { to: "/legalterms", text: "Mentions Légales" },
        { to: "/dashboard", text: "Tableau de bord" },
    ]}
/>
    <Outlet/>
    </>)
};