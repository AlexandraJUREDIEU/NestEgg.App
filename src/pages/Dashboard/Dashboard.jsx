// Import 
import { Outlet } from "react-router-dom"
import HeaderDashboard from "../../layout/HeaderDashboard"
import HeaderStyle from "../../styles/HeaderStyle"

// Styles




// Functions
export default function dashboard(){
    // State
     //Comportement
      //Return
    return(<>
    <HeaderStyle>
        <HeaderDashboard/>
        <h1>Test dashboard</h1>
        <Outlet/>
    </HeaderStyle>
   </> )
};