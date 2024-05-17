import HeaderContainer from "../../assets/layout/Header";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Styles
const HeaderProfilStyle = styled.header`
  /*Vue globale*/
  display: flex;
  flex-direction: row;
  img {
    width: 2em;
    height: 8vh;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-radius: 8em 8em 0 0;
    background-color: rgba(255, 255, 255, 0.5);
    height:10%;
    padding: 0 5vh;
  }
  li {
    padding: 1vh 0;
    display: flex;
    align-items: center;
  }
  ul li a.active {
    background:red;
  }

  ul img{
    height:2em !important;
    width:2em !important;
  }

  /*Vue mobile*/
  @media screen and (max-width: 1000px) {
    ul li:first-child {
      display:none;
    }
    .nomHeaderProfil {
      display: none;
    }
  }
  
  /*Vue desktop*/
  @media screen and (min-width: 1000px) {
    flex-direction: column;
    ul {
      flex-direction: column;
      left: 0;
      top: 0;
      width: 20%;
      height:100%;
      align-items: center;
      border-radius: 0 2em 2em 0;
    }
    li a {
      display:flex;
      align-items: center;
    }
    ul li:first-child img {
      width:7em !important;
      height:7em !important;
    }
  }
`;

//Liens des headers
const links = [
  {to:"/my-account/profil" , text:"Profil", imgsrc:"/icons-user-round.png"},
  {to:"/my-account/compte" , text:"Comptes bancaire", imgsrc:"/?"},
  {to:"/my-account/ressources" , text:"Revenus", imgsrc:"/icons8-euro-money-100.png"},
  {to:"/my-account/chargesfixes" , text:"Charges fixes", imgsrc:"/icons8-categorize-100.png"},
  ];

const linksHeader = [
  {to:"#concept" , text:"Concept", onClick: () => scrollToSection(conceptRef)},
  {to:"#about-us" , text:"Qui sommes nous?", onClick: () => scrollToSection(aboutUsRef)},
  {to:"#price" , text:"Tarifs", onClick: () => scrollToSection(pricingRef)},
  {to:"/login" , text:"Connexion"},
  ];

function HeaderProfil() {
  // State
  const [screenwidth, setscreenwidth] = useState(window.innerWidth);
  // Update la largeur de l'écran quand on la change
  useEffect(() => {
    const handleResize = () => {
      setscreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Return
  return (
    <>
      <HeaderProfilStyle>
      {screenwidth < 1000 && <HeaderContainer links={linksHeader}/>}
      <ul>
        <li>
          <Link to="/">
            <img
            src="/logo_nestegg.png"
            alt="Logo NestEgg"
            className="header-logo"
            />
          </Link>
        </li>
          {links.map((link, index) => (
            <li key={index}>
            <Link to={link.to} className={link.to === location.pathname ? 'active' : ''}>
              <div className="user-round-connexion">
                <img src={link.imgsrc} alt="User" />
              </div>
              <div className="nomHeaderProfil balmy">{link.text}</div>
            </Link>
            </li>
          ))}
        </ul>
      </HeaderProfilStyle>
    </>
  );
}
export default HeaderProfil;