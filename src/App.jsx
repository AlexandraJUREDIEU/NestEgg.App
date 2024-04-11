//Imports
import HeaderContainer from "./assets/layout/Header";
import AboutUs from "./pages/AboutUs";
import Concept from "./pages/Concept";
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import { useRef } from 'react';
import styled from "styled-components";


//Styles

const StyledSection = styled.section`


  .scroller{
    
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

.item-scroll{
    scroll-snap-align: start;
}
`;

//Fonctions


export default function App() {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const pricingRef = useRef(null);
const aboutUsRef = useRef(null);
const conceptRef = useRef(null);
const landingRef = useRef(null);

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
  <div className="scroller">
      <HeaderContainer links={links}/>
      <StyledSection ref={landingRef} className="item-scroll"><Landing/></StyledSection>
      <StyledSection ref={conceptRef} className="item-scroll"><Concept/></StyledSection>
      <StyledSection ref={aboutUsRef} className="item-scroll"><AboutUs/></StyledSection>
      <StyledSection ref={pricingRef} className="item-scroll"><Pricing/></StyledSection>
  </div>
      </>
  )
}


