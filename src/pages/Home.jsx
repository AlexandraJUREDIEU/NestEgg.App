import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Home;