//Imports
import HeaderContainer from "./assets/layout/Header";
import Box from "./assets/components/Box"
import { createGlobalStyle } from "styled-components";
import { ButtonLink } from "./assets/components/Button";
import CircleRadialProgress from "./assets/components/CircleRadialProgress";
import ProgressBar from "./assets/components/ProgressBar";

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

  .bottom-dashboard div {
    display:flex;
    flex-direction:row;
  }

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
          <Box id={2} href="/settings" onClickAction={handleBoxClick} className="short-box" children={
            <>
              <h3>
                Votre objectif
                <CircleRadialProgress progress="10" width="300" color1="darkred" color2="purple" height="40px"/>
              </h3>
          </>}/>
          <Box id={3} href="/transactions" onClickAction={handleBoxClick} className="long-box" children={
            <>
              <h3>Votre épargne</h3>
              <p>697.02€</p>
            </>}/>
          <Box id={4} href="/addTransaction" onClickAction={handleBoxClick} className="short-box" children={
            <>
              <h3>Vos dernières dépenses</h3>
              <div>Dépense 1</div>
              <div>Dépense 2</div>
              <div>Dépense 3</div>
            </>}/>
          <Box id={5} href="/incoming" onClickAction={handleBoxClick} className="short-box" children={
            <>
              <img src="https://placehold.co/20x20" alt="image carte banquaire" />
              <h3>Ajouter une transaction</h3>
            </>}/>
          <Box id={6} href="/incoming" onClickAction={handleBoxClick} className="long-box" children={
            <>
              <p>3</p>
              <img src="https://placehold.co/20x20" alt="" />
              <h3>Charges à venir</h3>
            </>}/>
          
          
        </section>


        <section className="bottom-dashboard">
          <div>
            Vital: <ProgressBar progress="70" width="200" color1="#F5A483" color2="#fff2" height="30px" />
          </div>
          <div>
            Loisirs: <ProgressBar progress="80" width="200" color1="#43A9B6" color2="#fff2" height="30px" />
          </div>
          <div>
            Epargne:<ProgressBar progress="20" width="200" color1="#B243B6" color2="#fff2" height="30px" />
          </div>
        </section>    
      </>
      )
  }
  
  export default Dashboard;