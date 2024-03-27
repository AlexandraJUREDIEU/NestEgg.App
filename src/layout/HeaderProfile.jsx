// Import 
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import HeaderStyle from "../styles/HeaderStyle"

// Styles


// Functions
export default function Header() {
    // State
    //Comportement
    //Return
    return (<>
        <HeaderStyle>
            <img src="public\logoSansTexte.png" alt="logo Nest Egg" />
            <Navbar
                links={[
                    { to: "/account", text: "Mon compte" },
                    { to: "/income", text: "Revenus" },
                    { to: "/settings", text: "Paramètres" },
                    { to: "/fixedCharges", text: "Charges fixes" },
                ]}
            />
        </HeaderStyle>
        <Outlet />
    </>)
}

