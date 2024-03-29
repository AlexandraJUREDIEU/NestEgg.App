//Imports
import HeaderContainer from "./assets/layout/Header";



//Styles



//Fonctions
const links = [
  {to:"/my-account" , text:"Mon Compte"},
  {to:"/summary" , text:"Synthese"},
  {to:"#add-transaction" , text:"Ajouter une transaction"}
  ];

function Dashboard() {
    //State
    //Comportement
    //Render
    return (
      <>
        <HeaderContainer links={links}/>
        <h1>Tableau de bord</h1>
      </>
    )
  }
  
  export default Dashboard;