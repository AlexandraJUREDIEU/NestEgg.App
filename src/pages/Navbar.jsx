import { NavLink } from "react-router-dom";
import Header from "../composants/Header"

function Home() {
  return (
    <>
    <Header
      page1="Dashboard"
      page2="MyAccount"
      page3="Summary"
      page4="Contact"
      page5="AddTransaction"
    />
    </>
  );
}

export default Home;
