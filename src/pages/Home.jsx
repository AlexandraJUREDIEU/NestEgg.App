import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Text from "../composants/Text.jsx"

function Home() {
  return (
    <>
    <Outlet />
    </>
  );
}

export default Home;