import HeaderContainer from "./assets/layout/Header";
import HeaderProfile from './assets/layout/HeaderProfil.jsx';


import styled from "styled-components";



import Profil from "./pages/myAccount/Profil.jsx";
import Compte from "./pages/myAccount/Compte.jsx";
import Ressources from "./pages/myAccount/Ressources.jsx";
import ChargesFixes from "./pages/myAccount/ChargesFixes.jsx";


//Styles
const Style = styled.div`
  /*Vue globale*/
  width:100%;
  height:100vh;
  section{
    border-radius:3em;
  }
  img{
    width:0.8em;
    height:0.8em;
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


const SectionWrapper = styled.section`
  position: relative;
  height: 100vh;
  left:0;
`;


//Fonctions
const links = [
  {to:"/my-account" , text:"Placeholder my account active", imgsrc:"icons-user-round.png"},
  {to:"/bank-account" , text:"Compte bancaire", imgsrc:"?"},
  {to:"/income" , text:"Revenus", imgsrc:"icons8-euro-money-100.png"},
  {to:"/monthly-bills" , text:"Charges fixes", imgsrc:"icons8-categorize-100.png"},
  ];

  const linksHeader = [
    {to:"#concept" , text:"Concept", onClick: () => scrollToSection(conceptRef)},
    {to:"#about-us" , text:"Qui sommes nous?", onClick: () => scrollToSection(aboutUsRef)},
    {to:"#price" , text:"Tarifs", onClick: () => scrollToSection(pricingRef)},
    {to:"/login" , text:"Connexion"},
    ];

function MyAccount() {
    //State
    //Comportement
    //Render
    return (
      <>
        <Style>
          <SectionWrapper>
            <HeaderContainer links={linksHeader}/>
            <HeaderProfile links={links}/>
            <Profil />
          </SectionWrapper>
          <SectionWrapper>
            <HeaderContainer links={linksHeader}/>
            <HeaderProfile links={links}/>
            <Compte />
          </SectionWrapper>
          <SectionWrapper>
            <HeaderContainer links={linksHeader}/>
            <HeaderProfile links={links}/>
            <Ressources />
          </SectionWrapper>
          <SectionWrapper>
            <HeaderContainer links={linksHeader}/>
            <HeaderProfile links={links}/>
            <ChargesFixes />
          </SectionWrapper>
        </Style>
        </>
    )
  }
  
  export default MyAccount;