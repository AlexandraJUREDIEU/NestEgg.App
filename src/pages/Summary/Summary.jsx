// Import 
import { Outlet } from "react-router-dom"
import HeaderSummary from "../../layout/HeaderSummary"
// Styles




// Functions
export default function Summary(){
       // State
     //Comportement
      //Return
    return(<>
    <HeaderSummary/>
        <h1>Test summary</h1>
        <Outlet/>
    </>)
};