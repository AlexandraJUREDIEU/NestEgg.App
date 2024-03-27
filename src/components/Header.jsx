import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

export default function Header(){
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
    ]}
/>
    <Outlet/>
    </>)
};