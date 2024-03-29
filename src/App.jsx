//Imports
import HeaderContainer from "./assets/layout/Header";



//Styles



//Fonctions
const links = [
{to:"#concept" , text:"Concept"},
{to:"#about-us" , text:"Qui sommes nous?"},
{to:"#price" , text:"Tarifs"},
{to:"#auth" , text:"Connexion"},
{to:"/dashboard" , text:"Tableau de bord"}, //A retirer
];

export default function App() {
  //State
  //Comportement
  //Render
  return (<>
      <HeaderContainer links={links}/>
      <h1>Accueil</h1>
      </>
  )
}


