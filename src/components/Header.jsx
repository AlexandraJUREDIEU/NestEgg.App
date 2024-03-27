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
}

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
}

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
 }

 export default function NavbarSummary(){
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
 }