import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Styles
const HeaderProfilStyle = styled.header`
  display: flex;
  flex-direction: row;
  img {
    width: 2em;
    height: 2em;
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
  }
  li {
    padding: 0.5em 0;
    display: flex;
    align-items: center;
  }
  .nomHeaderProfil {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    ul {
      flex-direction: column;
      left: 0;
      top: 0;
      width: 20%;
      align-items: center;
      border-radius: 2em;
    }
    .nomHeaderProfil {
      display: flex;
    }
    img {
      display: none;
    }
    flex-direction: column;
  }
`;

export default function HeaderProfil({ links }) {
  return (
    <>
      <HeaderProfilStyle>
      <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>
                <div className="user-round-connexion">
                  <img src="icons-user-round.png" alt="User" />
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
