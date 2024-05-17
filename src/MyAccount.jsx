
import styled from "styled-components";
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "./config";
import Profil from "./pages/myAccount/Profil.jsx";
import Compte from "./pages/myAccount/Compte.jsx";
import Ressources from "./pages/myAccount/Ressources.jsx";
import ChargesFixes from "./pages/myAccount/ChargesFixes.jsx";

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

//Fonctions

function MyAccount() {
    //State

  //Récupérer les fonctions nécéssaires au fetch des données de l'utilisateur
    const [activeUser, setActiveUser] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [chargesFixes, setChargesFixes] = useState([]);
    const [bankAccount, setBankAccount] = useState([]);

    // Cherches les données de l'utilisateur au chargement de la page uniquement
    useEffect(() => {
      getUser();
    }, []);


  async function getUser() {
    //Récupérer l'id de l'utilisateur venant de l'url
    const idUser = new URLSearchParams(location.search).get("userId");
    try {
      // Récupère les données de l'url de back et récupère le contenu de cette dernière 
      const userListResponse = await axios.get(`${API_URL}/users/list`);
      // Récupère l'utilisateur correspondant à la réponse précédente
      const user = userListResponse.data.find((user) => user.id === idUser);
      if (user) {
        // Si il trouve l'user, setActiveUser est le state, et pour le reste il effectue les fonctions qui sont en dessous avec la variable user.id
        setActiveUser(user);
        getChargesFixes(user.id);
        fetchBank(user.id);
        fetchTransactions(user.id);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  
  const getChargesFixes = async (userId) => {
    try {
      // Récupère les données de l'url de back et récupère le contenu de cette dernière 
      const userChargesFixe = await axios.get(`${API_URL}/dashboard/fixedCharges?userid=${userId}`);
      // Récupération des charges fixes via le résultat de la méthode get d'axios
      const data = userChargesFixe.data[0];
      // modification du state
      setChargesFixes(data);
    } catch (error) {
      console.error('Error fetching fixed charges:', error);
    }
  };

  const fetchTransactions = async (userId) => {
    try {
      // Récupère les données de l'url de back et récupère le contenu de cette dernière 
      const response = await axios.get(`${API_URL}/dashboard/transactions?userid=${userId}`);
      // Récupération des transactions via le résultat de la méthode get d'axios
      const data = response.data[0].transactions;
      // modification du state
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const fetchBank = async (userId) => {
    try {
      // Récupère les données de l'url de back et récupère le contenu de cette dernière 
      const response = await axios.get(`${API_URL}/dashboard/nameAccount?userid=${userId}`);
      // récupération de la banque via le résultat de la méthode get d'axios
      const data = response.data;
      // modification du state
      setBankAccount(data);
  } catch (error) {
    console.error('Error fetching bank:', error);
  }
  };

    //Comportement
    //Render

/* return des routes avec à l'intérieur la props activeUser qui permet de le récupérer facilement sur toutes les pages, et ensuite les props comme par exemple 
chargesFixes qui servent à récupérer facilement les données sur la page en question */
    return (
      <>
        <Style>
          <Routes>
            <Route path="/" element={<Navigate to="/my-account/profil" />} />
            <Route path="/profil" element={<Profil activeUser={activeUser} />} />
            <Route path="/compte" element={<Compte activeUser={activeUser} chargesFixes={chargesFixes} />} />
            <Route path="/ressources" element={<Ressources activeUser={activeUser} />} />
            <Route path="/chargesFixes" element={<ChargesFixes activeUser={activeUser} chargesFixes={chargesFixes} bankAccount={bankAccount}/>} />
          </Routes>
        </Style>
      </>
    )
  }
  export default MyAccount;