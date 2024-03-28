import { Outlet } from "react-router-dom";
import HeaderDashboard from "../../layout/HeaderDashboard";
import HeaderStyle from "../../styles/HeaderStyle";
import Box from "../../components/Box";
import styled, { createGlobalStyle } from "styled-components";

// Styles
const DashboardStyle = createGlobalStyle`
  h1{
    padding: 1em;
  }

  .div-container-boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
  }

  // ne s'affiche pas car le bg de box.jsx prends le dessus
  .long-box{ 
    background: blue;
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
          <Box id={1} href="/profile" onClickAction={handleBoxClick} />
          <Box id={2} href="/settings" onClickAction={handleBoxClick} />
          <Box id={3} href="/transactions" onClickAction={handleBoxClick} className="long-box"/>
          <Box id={4} href="/addTransaction" onClickAction={handleBoxClick} />
          <Box id={5} href="/incoming" onClickAction={handleBoxClick} />
          <Box id={6} href="/incoming" onClickAction={handleBoxClick} />
        </div>
        <Outlet />
      </HeaderStyle>
    </>
  );
}
