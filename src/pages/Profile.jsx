import Button from "../components/Button"
import { Outlet } from "react-router-dom"
// import { NavLink } from "react-router-dom"

export default function Profile(){
    return (<>
    <Outlet/>
    <Button/>
    </>)
}