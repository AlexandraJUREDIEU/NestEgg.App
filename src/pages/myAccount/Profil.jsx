import Wrapper from "../../assets/components/Wrapper"
import ProfilLigneInvite from "../../assets/components/ProfilLigneInvite";
import PhraseAmicale from "./PhraseAmicale";
import LineWithPlus from "../../assets/components/LineWith+";

import styled from "styled-components";

const ProfilStyle = styled.header`
  display:flex;
  flex-direction:column;
  gap:1em;

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
    //Comportement
    //Render
    return (
      <>
        <ProfilStyle>
          <PhraseAmicale/>
          <Wrapper
            initial={<>
              <div>Leroy Luca</div>
              peepoMail@hotmail.fr
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