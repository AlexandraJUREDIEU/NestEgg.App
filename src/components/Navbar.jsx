// Import 
import { NavLink, Outlet } from "react-router-dom";
// Styles




// Functions
export default function Navbar({ links }) {
    // State
     //Comportement
      //Return
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