
import styled from "styled-components";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "./config";

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

  //Récupérer l'utilisateur
    const [activeUser, setActiveUser] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [chargesFixes, setChargesFixes] = useState([]);
    const [bankAccount, setBankAccount] = useState([]);


  async function getUser() {
    const idUser = new URLSearchParams(location.search).get("userId");
    try {
      const userListResponse = await axios.get(`${API_URL}/users/list`);
      const user = userListResponse.data.find((user) => user.id === idUser);
      if (user) {
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
      const userChargesFixe = await axios.get(`${API_URL}/dashboard/fixedCharges?userid=${userId}`);
      const data = userChargesFixe.data[0];
      setChargesFixes(data);
    } catch (error) {
      console.error('Error fetching fixed charges:', error);
    }
  };

  const fetchTransactions = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/transactions?userid=${userId}`);
      const data = response.data[0].transactions;
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const fetchBank = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/nameAccount?userid=${userId}`);
      const data = response.data;
      setBankAccount(data);
  } catch (error) {
    console.error('Error fetching bank:', error);
  }
  };


  useEffect(() => {
    getUser();
  }, []);


    //Comportement
    //Render

    return (
      <>
      {/*
      {activeUser && (
        <>
          <p>User found: {activeUser.name}</p>
        </>
      )}
    */}

      {/*
      {transactions && (
        <>
          <p>User found: {activeUser.name}</p>
          {chargesFixes.length != 0 ? (
            <>Voici ton premier goal: {chargesFixes.goals[0].nameGoal}
            <br></br>Voici ta première transaction: {transactions[0].name}
            <br></br>Banque: {bankAccount.mabanque}</>  
        ) : (
            <p>Loading...</p>
          )}
        </>
      )}
      */}
      
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