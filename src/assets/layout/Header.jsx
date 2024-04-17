//Imports
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from 'react';

//Styles
const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0.5em 2em 0em 1em;

  .header-ico-menu {
    order: 300;
  }

  @media screen and (min-width: 1280px) {
    nav {
      order: 200;
    }

    nav ul {
      font-size: 2em;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-left: auto;
      overflow-x: auto;
      gap:1em;
    }
    nav ul li {
        list-style-type: none;
    }
    nav ul li a {
      text-decoration:none;
    }
  }
`;
const LinkLogo = styled(Link)`
  height: 100%;
  img {
    height: 100%;
  }
`;
const ImageIco = styled.img`
  height: 30%;
`;

//Fonctions

export default function HeaderContainer({ links }) {


  //State
  //Reaction at the change of the size of the screen
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Comportement
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //Render
  return (
    <>
      <HeaderStyle>
        <LinkLogo to="/">
          <img
            src="/public/logo_nestegg.png"
            alt="Logo NestEgg"
            className="header-logo"
          />
        </LinkLogo>
        
        
        {isSmallScreen && <>
        <ImageIco
          src="/public/icons-menu-hamburger.png"
          alt="Menu"
          className="header-ico-menu"
          onClick={toggleMenu}
        />
        </>}

        {(isMenuOpen || !isSmallScreen) && (
          <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} onClick={link.onClick}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <Outlet />
      </HeaderStyle>
    </>
  );
}
