import HeaderProfil from "../../assets/layout/HeaderProfil";
import Wrapper from "../../assets/components/Wrapper";
import ProfilLigneInvite from "../../assets/components/ProfilLigneInvite";
import PhraseAmicale from "./PhraseAmicale";
import LineWithPlus from "../../assets/components/LineWith+";
import styled from "styled-components";


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

function Profil({activeUser}) {
    //State
    //Comportement
    //Render
    return (
      <>
        <HeaderProfil/>
        <ProfilStyle>
          <PhraseAmicale activeUser={activeUser}/>
          <Wrapper
          // activeUser."X" affiche la proprité souhaitée du User
            initial={<>
              <div>{activeUser.name} {activeUser.lastname}</div>
              {activeUser.email} 
            </>}
            deroule={<>
            <form>
              <div>
                <label>Nom</label>
                <input type="text" id="name" name="name" required minLength="4" maxLength="20" defaultValue={activeUser.lastname}/>
              </div>
              <div>
                <label>Prénom</label>
                <input type="text" id="name" name="name" required minLength="4" maxLength="20" defaultValue={activeUser.name}/>
              </div>
              <div>
                <label>E-mail</label>
                <input type="email" id="name" name="name" required minLength="4" maxLength="20" defaultValue={activeUser.email} />
              </div>
              <div>
                <label>Mot de passe</label>
                <input type="password" id="name" name="name" required minLength="4" maxLength="20" />
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