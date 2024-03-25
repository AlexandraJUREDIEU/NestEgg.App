import { NavLink, Outlet } from "react-router-dom";

export default function Header(){
    return (<>
    <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/account">MyAccount</NavLink></li>
        <li><NavLink to="/summary">Summary</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/AddTransaction">AddTransaction</NavLink></li>
    </ul>
    <Outlet/>
    </>)
}