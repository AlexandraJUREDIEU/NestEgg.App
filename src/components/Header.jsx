import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

export default function Header(){
    return (<>
    <Navbar
    links={[
        { to: "/home", text: "Home" },
        { to: "/dashboard", text: "Dashboard" },
        { to: "/account", text: "MyAccount" },
        { to: "/summary", text: "Summary" },
        { to: "/contact", text: "Contact" },
        { to: "/AddTransaction", text: "AddTransaction" }
    ]}
/>
    <Outlet/>
    </>)
}