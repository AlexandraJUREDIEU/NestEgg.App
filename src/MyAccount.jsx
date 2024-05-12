import HeaderContainer from "./assets/layout/Header";
import HeaderProfile from './assets/layout/HeaderProfil.jsx';


import styled from "styled-components";



import Profil from "./pages/myAccount/Profil.jsx";
import Compte from "./pages/myAccount/Compte.jsx";
import Ressources from "./pages/myAccount/Ressources.jsx";
import ChargesFixes from "./pages/myAccount/ChargesFixes.jsx";


//Styles
const Style = styled.header`
  /*Vue globale*/
  width:100wh;
  height:100vh;
  section{
    border-radius:50px;
    background-color: rgba(255, 255, 255, 0.5);
    padding:0 5em;
    padding-top:1em;
  }
  section {
    height: 90vh;
  }

  /*Vue mobile*/
  @media screen and (max-width: 1000px) {
    .sections {
      position:relative;
      width:100%;
      height:90%;
      padding:1em;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
    }
    .section1{
      height:20%;
    }
    .section2 {
      height:60%;
    }
  }
  
  /*Vue desktop*/
  @media screen and (min-width: 1000px) {
    .sections {
      position:relative;
      left:20%;
      width:80%;
      height:100%;
      padding:1em;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
    }
    .section1{
      height:20%;
    }
    .section2 {
      height:70%;
    }
  }
`;



//Fonctions
const links = [
  {to:"/my-account" , text:"Placeholder my account active", imgsrc:"icons-menu-hamburger.png"},
  {to:"/bank-account" , text:"Compte bancaire", imgsrc:"icons-menu-hamburger.png"},
  {to:"/income" , text:"Revenus", imgsrc:"icons-menu-hamburger.png"},
  {to:"/monthly-bills" , text:"Charges fixes", imgsrc:"icons-menu-hamburger.png"},
  ];

function MyAccount() {
    //State
    //Comportement
    //Render
    return (
      <>
        <Style>
        <HeaderProfile links={links}></HeaderProfile>
        {/*<div className="sections">
          <section className="section section1">section1</section>
          <section className="section section2">section2</section>
        </div>*/}

        <section><Profil /></section>
        <section><Compte /></section>
        <section><Ressources /></section>
        <section><ChargesFixes /></section>
        </Style>
      </>
    )
  }
  
  export default MyAccount;