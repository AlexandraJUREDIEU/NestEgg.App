import { Outlet } from "react-router-dom";
import HeaderDashboard from "../../layout/HeaderDashboard";
import HeaderStyle from "../../styles/HeaderStyle";
import Box from "../../components/Box";
import Button from "../../components/Button";

// Styles
const DashboardStyle = createGlobalStyle`
  h1{
    padding: 1em;
  }

  .div-container-boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5em;
    flex-wrap: wrap;
    width: 70vw;
    margin: auto;
  }

 
  .short-box{
    width: 25%;
  }

  .long-box{ 
    width: 40%;
  }
`;

// Functions
export default function Dashboard() {
  // State
  // Comportement
  const handleBoxClick = (id) => {
    console.log(`La boîte ${id} a été cliquée.`);
  };
  // Return
  return (
    <>
      <DashboardStyle />
      <HeaderStyle>
        <HeaderDashboard />
        <h1>Tableau de bord</h1>
        <div className="div-container-boxes">
          <Box id={1} href="/profile" onClickAction={handleBoxClick} className="short-box"/>
          <Box id={2} href="/settings" onClickAction={handleBoxClick} className="short-box"/>
          <Box id={3} href="/transactions" onClickAction={handleBoxClick} className="long-box"/>
          <Box id={4} href="/addTransaction" onClickAction={handleBoxClick} className="short-box"/>
          <Box id={5} href="/incoming" onClickAction={handleBoxClick} className="short-box"/>
          <Box id={6} href="/incoming" onClickAction={handleBoxClick} className="long-box"/>
        </div>
        <Button
  action={() => console.log("Button clicked!")}
  to="/"
  className="custom-class"
  content="Accueil"
/>
        <Outlet />
      </HeaderStyle>
    </>
  );
}
