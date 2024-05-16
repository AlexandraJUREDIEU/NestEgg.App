

import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../config";

const Style = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:1em;
`;


function PhraseAmicale() {
    //State
    
  //Récupérer l'utilisateur
  const [activeUser, setActiveUser] = useState([]);
  async function getUser() {
    const idUser = new URLSearchParams(location.search).get("userId");
    try {
      const userListResponse = await axios.get(`${API_URL}/users/list`);
      const user = userListResponse.data.find((user) => user.id === idUser);
      if (user) {
        setActiveUser(user);
        /*getChargesFixes(user.id);
        fetchTransactions(user.id);*/
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  getUser();

    //Comportement
    //Render
    return (
      <>
        <Style>
        <h1>Bonjour {activeUser.name}</h1>
        <p>Plus que [placeholder] jours pour remplir votre objectif</p>
        </Style>
      </>
    );
  }
  
  export default PhraseAmicale;