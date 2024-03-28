// Import 
import { Outlet } from "react-router-dom"
import HeaderProfile from "../../layout/HeaderProfile"
import HeaderStyle from "../../styles/HeaderStyle"
// Styles




// Functions
export default function Profile(){
     // State
     //Comportement
      //Return
    return (<>
    <HeaderStyle>
    <HeaderProfile/>
    <Outlet/>
    </HeaderStyle>
    </>)
}