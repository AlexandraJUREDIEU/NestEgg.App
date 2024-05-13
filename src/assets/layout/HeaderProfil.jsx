import React from "react";
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
      align-items: center;
      border-radius: 0 2em 2em 0;
    }
    li a {
      display:flex;
      align-items: center;
    }
    ul li:first-child img {
      width:10em;
      height:10em;
    }
  }
`;

export default function HeaderProfil({ links }) {
  return (
    <>
      <HeaderProfilStyle>
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
          {links.map((link, index, imgsrc) => (
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
