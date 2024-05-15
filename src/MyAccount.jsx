
import styled from "styled-components";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Profil from "./pages/myAccount/Profil.jsx";
import Compte from "./pages/myAccount/Compte.jsx";
import Ressources from "./pages/myAccount/Ressources.jsx";
import ChargesFixes from "./pages/myAccount/ChargesFixes.jsx";

import Header from "./assets/layout/Header.jsx";

//Styles
const Style = styled.div`
  /*Vue globale*/
  width:100%;
  height:100vh;
  section{
    border-radius:3em;
  }
  img{
    width:0.8em;
    height:0.8em;
  }
  main{
    padding:2em;
    gap:1em;
    display:flex;
    flex-direction:column;
  }
  /*Vue mobile*/
  @media screen and (max-width: 1000px) {
    .sections {
      position:relative;
      width:100%;
      height:90%;
      padding:1em;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
    }
    .section1{
      height:20%;
    }
    .section2 {
      height:60%;
    }
  }
  
  /*Vue desktop*/
  @media screen and (min-width: 1000px) {
    .sections {
      position:relative;
      left:20%;
      width:80%;
      height:100%;
      padding:1em;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
    }
    .section1{
      height:20%;
    }
    .section2 {
      height:70%;
    }
    
    main {
      position:relative;
      left:20%;
      width:80%;
    }
  }
`;


const SectionWrapper = styled.section`
  position: relative;
  height: 100vh;
  left:0;
`;


//Fonctions

function MyAccount() {
    //State
    //Comportement
    //Render

    return (
      <>
        <Style>
          <Routes>
            <Route path="/" element={<Navigate to="/my-account/profil" />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/compte" element={<Compte />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/chargesFixes" element={<ChargesFixes />} />
          </Routes>
        </Style>
      </>
    )
  }
  
  export default MyAccount;