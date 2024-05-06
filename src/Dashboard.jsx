//Imports
import HeaderContainer from "./assets/layout/Header";
import Box from "./assets/components/Box"
import { createGlobalStyle } from "styled-components";
import { ButtonLink } from "./assets/components/Button";
import CircleRadialProgress from "./assets/components/CircleRadialProgress";
import ProgressBar from "./assets/components/ProgressBar";
import { useAuth } from "./auth/AuthWrapper";

//Styles
const DashboardStyle = createGlobalStyle`
  h1{
    height: 8vh;
  }

  .div-container-boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5em;
    flex-wrap: wrap;
    width: 100vw;
    height: 48vh;
    margin: auto;
  }

.fXwZhN{
    margin: auto;
    height: 50%;
  }

  .short-box, .long-box{
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.25em;
  }

  .short-box button{
    height: 1.5em;
  }

  .short-box a{
    font-size: 0.65em;
    width: 100%;
  }
  .short-box button a{
    margin: 0 auto;
  }

  .last-spent{
    font-size: 0.75em;
  }
  .spent{
    font-size: 0.5em;
  }
  
  .ico-add-transaction,{
    height: 45px;
    width: 45px;
    margin: auto;
}

.ico-incoming-charges{
  height: 35px;
  margin: auto;
}

.text-ico-charges{
  display: flex;
  flex-direction: row;
  margin: auto;
}

.text-ico-charges p{
  font-size: 2em;
  font-weight: 600;
}

  .bottom-dashboard{
    height: 29vh;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    margin-top: 1em;
    width: 320px;
    align-items: end;
    margin: 0 auto;
    justify-content: end;
    padding-bottom: 0.25em;
  }

  .div-progress-bar{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .rectangle1{
    padding: 0 0.5em;
  }
  .ico-progress-bar{
    height: 30px;
    margin-right: 0.5em;
  }
 
  .p-amount-left {
    font-size: 0.5em;
    padding: 0;
    padding-right: 0.5em;
    text-align: right;
    width: 19em;
    display: flex;
    align-items: end;
    justify-content: end;
    margin-bottom: 0.25em;
  }

  .font-300{
    font-weight: 300;
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
          <Box id={1} href="/profile" onClickAction={handleBoxClick} className="short-box" children={<><h3 className="font-300">Salut Claire!</h3> <ButtonLink content="Actualiser mes charges" /></>}/>
          <Box id={2} href="/settings" onClickAction={handleBoxClick} className="short-box" children={
            <>
              <h3 className="font-300">
                Votre objectif
              </h3>
                <CircleRadialProgress progress="10" width="50px" color1="darkred" color2="purple" height="40px" />
          </>}/>
          <Box id={3} href="/transactions" onClickAction={handleBoxClick} className="long-box" children={
            <>
              <h3 className="font-300">Votre épargne</h3>
              <p>697.02€</p>
            </>}/>
          <Box id={4} href="/addTransaction" onClickAction={handleBoxClick} className="short-box" children={
            <>
              <h3 className="last-spent">Vos dernières dépenses</h3>
              <div className="spent">Dépense 1</div>
              <div className="spent">Dépense 2</div>
              <div className="spent">Dépense 3</div>
            </>}/>
          <Box id={5} href="/incoming" onClickAction={handleBoxClick} className="short-box" children={
            <>
              <img src="ico-add-transaction.png" alt="image carte banquaire" className="ico-add-transaction"/>
              <h3 className="font-300">Ajouter une transaction</h3>
            </>}/>
          <Box id={6} href="/incoming" onClickAction={handleBoxClick} className="long-box" children={
            <>
            <div className="text-ico-charges">
              <p>3</p>
              <img src="ico-charges.png" alt="ico charges à venir" className="ico-incoming-charges" />
            </div>
              <h3 className="font-300">Charges à venir</h3>
            </>}/>
          
          
        </section>


        <section className="bottom-dashboard">
          <div className="div-progress-bar">
            <img src="ico-vital.png" alt="ico vital" className="ico-progress-bar" />
            <ProgressBar type="Vital" progress="70" width="280" color1="#F5A483" color2="#fff2" height="20px" />
          </div>
            <p className="p-amount-left">Il vous reste 90€ pour finir la semaine, soit 22.50€ par jour</p>
          <div className="div-progress-bar">
          <img src="ico-loisirs.png" alt="ico loisirs" className="ico-progress-bar" />
            <ProgressBar type="Loisirs" progress="80" width="280" color1="#43A9B6" color2="#fff2" height="20px" />
          </div>
          <p className="p-amount-left">Il vous reste 90€ pour finir la semaine, soit 22.50€ par jour</p>
          <div className="div-progress-bar">
          <img src="ico-savings.png" alt="ico épargne" className="ico-progress-bar" />
            <ProgressBar type="Épargne" progress="80" width="280" color1="#B243B6" color2="#fff2" height="20px" />
          </div>
          <p className="p-amount-left">Il vous reste 90€ pour finir la semaine, soit 22.50€ par jour</p>
        </section>    
      </>
      )
  }
  
  export default Dashboard;