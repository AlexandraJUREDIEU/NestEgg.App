//Imports
import HeaderContainer from "./assets/layout/Header";
import Box from "./assets/components/Box"
import { createGlobalStyle } from "styled-components";
import { ButtonLink } from "./assets/components/Button";

//Styles
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
    width: 100vw;
    margin: auto;
  }

 /*
  .short-box{
    width: 25%;
  }

  .long-box{ 
    width: 40%;
  }
  */
`;


//Fonctions
const links = [
  {to:"/my-account" , text:"Mon Compte"},
  {to:"/summary" , text:"Synthese"},
  {to:"#add-transaction" , text:"Ajouter une transaction"}
  ];

function Dashboard() {
    //State

    //Comportement
    const handleBoxClick = (id) => {
      console.log(`La boîte ${id} a été cliquée.`);
    };

    //Render
    return (
      <>
      <DashboardStyle />
        <HeaderContainer links={links}/>
        <h1>Tableau de bord</h1>
        <section className="div-container-boxes">
          <Box id={1} href="/profile" onClickAction={handleBoxClick} className="short-box" children={<><h3>Salut Claire!</h3> <ButtonLink content="Actualiser mes charges" /></>}/>
          <Box id={2} href="/settings" onClickAction={handleBoxClick} className="short-box" children={<><h3>Votre objectif</h3></>}/>
          <Box id={3} href="/transactions" onClickAction={handleBoxClick} className="long-box" children={<><h3>Votre épargne</h3></>}/>
          <Box id={4} href="/addTransaction" onClickAction={handleBoxClick} className="short-box" children={<>
          <h3>Vos dernières dépenses</h3>
          <div>Dépense 1</div>
          <div>Dépense 2</div>
          <div>Dépense 3</div>
          </>}/>
          <Box id={5} href="/incoming" onClickAction={handleBoxClick} className="short-box" children={<><h3>Ajouter une transaction</h3></>}/>
          <Box id={6} href="/incoming" onClickAction={handleBoxClick} className="long-box" children={<><h3>Charges à venir</h3></>}/>
        </section>
      </>
    )
  }
  
  export default Dashboard;