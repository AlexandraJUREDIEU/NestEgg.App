import HeaderProfil from "../../assets/layout/HeaderProfil";

import Wrapper from "../../assets/components/Wrapper";
import ProfilLigneInvite from "../../assets/components/ProfilLigneInvite";
import PhraseAmicale from "./PhraseAmicale";
import LineWithPlus from "../../assets/components/LineWith+";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import API_URL from "../../config";


const ProfilStyle = styled.main`
  display:flex;
  flex-direction:column;

  .InviteAndPlus {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .conteneurWrapper {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius:1em;
  }
  form div{
    display:flex;
    justify-content:space-between;

  }
`;

function Profil() {
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
        <HeaderProfil/>
        <ProfilStyle>
          <PhraseAmicale/>
          <Wrapper
            initial={<>
              <div>{activeUser.name} {activeUser.lastname}</div>
              {activeUser.email} 
            </>}
            deroule={<>
            <form>
              <div>
                <label>Nom</label>
                <input type="text" id="name" name="name" required minlength="4" maxlength="20" />
              </div>
              <div>
                <label>Prénom</label>
                <input type="text" id="name" name="name" required minlength="4" maxlength="20" />
              </div>
              <div>
                <label>E-mail</label>
                <input type="email" id="name" name="name" required minlength="4" maxlength="20" />
              </div>
              <div>
                <label>Mot de passe</label>
                <input type="password" id="name" name="name" required minlength="4" maxlength="20" />
              </div>
              <button type="submit">Enregistrer les modifications</button>
            </form>
            </>
            }
          />
          Budget individuel [on/off]
          <ProfilLigneInvite name="Lucas" mail="peepoMailer@hotmail.fr" />
          <ProfilLigneInvite name="Lucès" mail="peepoMailer@hotmail.fr" />
          <ProfilLigneInvite name="Lucus" mail="peepoMailer@hotmail.fr" />
          <LineWithPlus text="Invitez des amis"></LineWithPlus>
        </ProfilStyle>
      </>
    );
  }
  
  export default Profil;