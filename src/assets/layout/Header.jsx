//Imports
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

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

  ul {
    height: 4em;
    display: flex;
    align-items: center;
  }

  nav ul li {
    list-style-type: none;
  }
  nav ul li a {
    text-decoration: none;
    font-size: 1.5em;
  }

  ul > li:nth-child(4) > a {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6.25em;
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    padding: 0.1em 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  

  .max-mobile-header{
    position: relative;
    height: 150px;
    z-index: 5;
    margin-bottom: -0.37em;
    margin-left: -6.7em;
  }

  ul > li:nth-child(4) > a{
    display:flex;
  }
  
  hr{
    display:none;
  }
  nav {
    overflow-x: hidden;
  }
  ul li:hover hr {
    display:flex;
    background: #DDB993;

    height: 2px;
    width: 1000px;

    position: absolute;
    z-index:10000;
    border:0;
  }
  
  .user-round-connexion img {
    width:50px;
    height:50px;
    display: flex;
  }






  .text-connexion{
    padding: 0 1.25em;
    
  }

  ul > li:nth-child(4) > a {
    padding: 0.2em 0.5em;
    display:flex;
    flex-align: center;
  }





  // Début de la navbar en version mobile à continuer !!

  @media screen and (max-width: 1280px) {
    nav {
      position: absolute;
      height: 85vh;
      width: 100vw;
      top: 15vh;
      left: 0;
      background: rgb(92, 39, 116);
      background: linear-gradient(
        180deg,
        rgba(92, 39, 116, 1) 0%,
        rgba(57, 96, 203, 1) 100%
      );
      backdrop-filter: blur(40px);
      opacity: 95%;
    }

    

    nav ul {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
  }

  @media screen and (min-width: 1280px) {
    nav {
      order: 200;
    }
    ul > li:nth-child(4) > a {
      padding: 0.5em 1.5em;
    }

    nav ul {
      font-size: 1.5em;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-left: auto;
      overflow-x: auto;
      gap: 1em;
    }
    nav ul li {
      list-style-type: none;
    }
    nav ul li a {
      text-decoration: none;
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

  const [disableScroll, setDisableScroll] = useState(false);
  // Function to handle enabling/disabling scrolling
  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [disableScroll]);

  // Function to toggle scrolling
  const toggleScroll = () => {
    setDisableScroll(!disableScroll);
  };

  const activateScroll = () => {
    setDisableScroll("true");
  };
  const desactivateScroll = () => {
    setDisableScroll("false");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);



function onClickNavBarEvent () {
  link.onClick();
  desactivateScroll();
}



  //Hover:
  // State for screen width
  const [screenwidth, setscreenwidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setscreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);





  //Comportement
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setscreenwidth(window.innerWidth);
  };
  //Render
  return (
    <HeaderStyle screenwidth={screenwidth}>
      <LinkLogo to="/">
        <img
          src="/public/logo_nestegg.png"
          alt="Logo NestEgg"
          className="header-logo"
        />
      </LinkLogo>

      {isSmallScreen && (
        <>
          <ImageIco
            src="/public/icons-menu-hamburger.png"
            alt="Menu"
            className="header-ico-menu"
            onClick={toggleMenu}
          />
        </>
      )}

      {(isMenuOpen || !isSmallScreen) && (
        <>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                
              {link.to==="/login" && isSmallScreen && <div><img className="max-mobile-header" src="public/mascotte-mobile-header.png"/></div> }
                
              <Link
                    to={link.to}
                    onClick={() => {
                      onClickNavBarEvent(link);
                    }}
                  >
                    {link.to === "/login" ? (
                      <>
                        <div className="user-round-connexion">
                          <img src="public\icons-user-round.png" />
                        </div>

                        <div className="text-connexion balmy">{link.text}</div>
                      </>
                    ) : (
                      link.text
                    )}
                    <hr />
                  </Link>
              </li>
            ))}
          </ul>
        </nav>
        </>
      )}
      <Outlet />
    </HeaderStyle>
  );
}
