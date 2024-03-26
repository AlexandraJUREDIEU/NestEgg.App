import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

export default function Header(){
    return (<>
    <Navbar
    links={[
        { to: "/", text: "Home" },
        { to: "admin/dashboard", text: "Dashboard" },
        { to: "admin/account", text: "MyAccount" },
        { to: "admin/summary", text: "Summary" },
        { to: "admin/contact", text: "Contact" },
        { to: "admin/AddTransaction", text: "AddTransaction" }
    ]}
/>
    <Outlet/>
    </>)
}