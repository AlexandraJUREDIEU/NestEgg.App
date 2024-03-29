//Imports
import HeaderContainer from "./assets/layout/Header";



//Styles



//Fonctions
const links = [
  {to:"/transactions" , text:"Vos Transactions"},
  {to:"/incoming" , text:"A venir"},
  {to:"/saving" , text:"Epargne"},
  {to:"/stats" , text:"Stats"},
  {to:"/dashboard" , text:"Tableau de bord"}, //A retirer
  ];


function Summary() {
    //State
    //Comportement
    //Render
    return (
      <>
        <HeaderContainer links={links} />
        <h1>Synthese du mois</h1>
      </>
    )
  }
  
  export default Summary;