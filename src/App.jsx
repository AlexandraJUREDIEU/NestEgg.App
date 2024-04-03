//Imports
import HeaderContainer from "./assets/layout/Header";
import AboutUs from "./pages/AboutUs";
import Concept from "./pages/Concept";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import { forwardRef, useRef } from 'react';


//Styles



//Fonctions


export default function App() {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const pricingRef = useRef(null);
const aboutUsRef = useRef(null);
const conceptRef = useRef(null);

const links = [
{to:"#concept" , text:"Concept", onClick: () => scrollToSection(conceptRef)},
{to:"#about-us" , text:"Qui sommes nous?", onClick: () => scrollToSection(aboutUsRef)},
{to:"#price" , text:"Tarifs", onClick: () => scrollToSection(pricingRef)},
{to:"#auth" , text:"Connexion"},
{to:"/dashboard" , text:"Tableau de bord"}, //A retirer
];


  //State
  
  //Comportement
  //Render
  return (<>
      <HeaderContainer links={links}/>
      <h1>Accueil</h1>
      <Landing/>
      <div ref={conceptRef}><Concept/></div>
      <div ref={aboutUsRef}><AboutUs/></div>
      <div ref={pricingRef}><Pricing /></div>
      </>
  )
}


