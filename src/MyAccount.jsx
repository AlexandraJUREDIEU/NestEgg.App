import HeaderContainer from "./assets/layout/Header";
//Styles
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
      <HeaderContainer links={links}/>
        <h1>Mon Compte</h1>
      </>
    )
  }
  
  export default MyAccount;