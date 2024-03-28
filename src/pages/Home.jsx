import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Text from "../composants/Text.jsx"
import Input from "../composants/Input.jsx"

function Home() {
  return (
    <>
      <Outlet />
      <Input
        type="email"
        placeholder="Enter your email"
      />
    </>
  );
}

export default Home;