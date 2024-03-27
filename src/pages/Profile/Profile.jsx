// Import 
import { Outlet } from "react-router-dom"
import HeaderProfile from "../../layout/HeaderProfile"

// Styles




// Functions
export default function Profile(){
     // State
     //Comportement
      //Return
    return (<>
    <HeaderProfile/>
    <Outlet/>
    </>)
}