import {
    NavLink,
    Outlet,
  } from "react-router-dom";

function Home() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/AddTransaction">go to AddTransaction</NavLink>
          <NavLink to="/Contact">go to Contact</NavLink>
          <NavLink to="/Dashboard">go to Dashboard</NavLink>
          <NavLink to="/Home">go to Home</NavLink>
          <NavLink to="/Summary">go to Summary</NavLink>
          <NavLink to="/MyAccount">go to MyAccount</NavLink>
        </nav>
        <div>
          <Outlet />
        </div>
      </header>
    </>
  );
}

export default Home;
