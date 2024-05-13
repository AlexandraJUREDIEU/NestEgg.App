import Wrapper from "../../assets/components/Wrapper"
import ProfilLigneInvite from "../../assets/components/ProfilLigneInvite"

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
  img{
    height:0.8em;
  }
`;





function Profil() {
    //State
    //Comportement
    //Render
    return (
      <>
        <ProfilStyle>
          <p>Bonjour Luca</p>
          <p>Plus que 158 jours pour remplir votre objectif</p>
          <Wrapper
            initial={<>
              <div>Leroy Luca</div>
              peepoMail@hotmail.fr
            </>}
            deroule={<>zzz
            </>
              /*<form>
                Nom <input>Leroy</input>
                Prénom Luca
                E-mail peepoMailer@hotmail.fr
                Mot de passe ************
  
                Enregistrer
              </form>*/
            }
          />
          Budget individuel [on/off]
          <ProfilLigneInvite name="Lucas" mail="peepoMailer@hotmail.fr" />
          <ProfilLigneInvite name="Lucès" mail="peepoMailer@hotmail.fr" />
          <ProfilLigneInvite name="Lucus" mail="peepoMailer@hotmail.fr" />
          <div className="InviteAndPlus"><p>Invitez des amis</p><img src="icons8-add-90.png" alt="" /></div>
        </ProfilStyle>
      </>
    );
  }
  
  export default Profil;