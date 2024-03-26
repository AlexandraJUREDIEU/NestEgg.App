import { NavLink } from "react-router-dom";


function Home() {
  return (
    <>
    <nav>
        <NavLink to="/admin/Contact">go to Profil</NavLink>
        <NavLink to="/admin/Summary">go to Synthèse</NavLink>
    </nav>
    </>
  );
}

export default Home;