// Import 
import Button from "../../components/Button"
import { Outlet } from "react-router-dom"
import NavbarProfile from '../../components/NavProfile'

// Styles




// Functions
export default function Profile(){
     // State
     //Comportement
      //Return
    return (<>
    <NavbarProfile/>
    <Outlet/>
    </>)
}