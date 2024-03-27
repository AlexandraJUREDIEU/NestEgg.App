import styled from 'styled-components';



import { NavLink } from "react-router-dom";


const StyleButton = styled.header`
`;


function Header(props) {
  // State


  //Comportement (click...)


  //Return (qu'est ce qu'il affche)
  return (<>
    <nav>
        <NavLink to={{pathname:`./${props.page1}`}}>{props.page1}</NavLink> - 
        <NavLink to={{pathname:`./${props.page2}`}}>{props.page2}</NavLink> - 
        <NavLink to={{pathname:`./${props.page3}`}}>{props.page3}</NavLink> - 
        <NavLink to={{pathname:`./${props.page4}`}}>{props.page4}</NavLink> - 
        <NavLink to={{pathname:`./${props.page5}`}}>{props.page5}</NavLink> - 
    </nav>
    </>);
}

/*
export default function Header(){
    return (<>
    <Navbar
    links={[
        { to: "/", text: "Home" },
        { to: "/concept", text: "Concept" },
        { to: "/aboutUs", text: "Qui sommes nous?" },
        { to: "/pricing", text: "Nos tarifs" },
        { to: "/login", text: "Se connecter" },
        { to: "/signIn", text: "S'inscrire" },
        { to: "/contact", text: "Nous contacter" },
        { to: "/legalterms", text: "Mentions Légales" },
    ]}
/>
    <Outlet/>
    </>)
}
*/

export default Header;