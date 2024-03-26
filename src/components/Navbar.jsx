import { NavLink, Outlet } from "react-router-dom";

export default function Navbar({ links }) {
    return (
        <>
            <ul>
                {links.map((link, index) => (
                    <li key={index}><NavLink to={link.to}>{link.text}</NavLink></li>
                ))}
            </ul>
            {/* <Outlet/> */}
        </>
    );
}