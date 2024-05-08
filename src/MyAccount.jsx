import HeaderContainer from "./assets/layout/Header";
import HeaderProfile from './assets/layout/HeaderProfil.jsx';
import styled from "styled-components";
//Styles
const Style = styled.header`
  width:100wh;
  height:100vh;
`;



//Fonctions
const links = [
  {to:"/bank-account" , text:"Compte bancaire"},
  {to:"/income" , text:"Revenus"},
  {to:"/monthly-bills" , text:"Charges fixes"},
  {to:"/setting" , text:"Paramètre"},
  {to:"/dashboard" , text:"Tableau de bord"}, //A retirer
  ];

function MyAccount() {
    //State
    //Comportement
    //Render
    return (
      <>
        <Style>
        <HeaderProfile links={links}></HeaderProfile>
          Mon profil:
        </Style>
      </>
    )
  }
  
  export default MyAccount;