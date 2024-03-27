// Import 
import { Outlet } from "react-router-dom"
import NavbarDashboard from "../../components/NavDashboard"

// Styles




// Functions
export default function dashboard(){
    // State
     //Comportement
      //Return
    return(<>
        <NavbarDashboard/>
        <h1>Test dashboard</h1>
        <Outlet/>
   </> )
};