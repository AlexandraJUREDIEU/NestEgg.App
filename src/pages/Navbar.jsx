import { NavLink } from "react-router-dom";


function Home() {
  return (
    <>
    <nav>
        <NavLink to="./Dashboard">go to Dashbord</NavLink>
        <NavLink to="./MyAccount">go to MyAccount</NavLink>
        <NavLink to="./Summary">go to Summary</NavLink>
        <NavLink to="./Contact">go to Contact</NavLink>
        <NavLink to="./AddTransaction">go to AddTransaction</NavLink>
    </nav>
    </>
  );
}

export default Home;
