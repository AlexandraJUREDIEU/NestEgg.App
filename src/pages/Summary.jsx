import { Outlet } from "react-router-dom"
import Button from "../components/Button"
export default function Summary(){
    return(<>
        <Button>bouton</Button>
        <Outlet/>
    </>)
};