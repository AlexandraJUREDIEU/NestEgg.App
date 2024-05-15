import HeaderProfil from "../../assets/layout/HeaderProfil";

import PhraseAmicale from "./PhraseAmicale";
import Wrapper from "../../assets/components/Wrapper"

import styled from "styled-components";
import LineWithPlus from "../../assets/components/LineWith+";

const CompteStyle = styled.header`

.conteneurContenuCompte {
  display:flex;
  flex-direction: column;
  width:60%;
}

.avatarAndName{
  width:40%;
}
.derouleCompte{
  display:flex;
}
.conteneurWrapper{
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:2em;
}
.conteneurContenuCompte p {
  background: #53358A;
  border-radius:2em;
}
`;


function Compte() {
    //State
    //Comportement
    //Render
    return (
      <>
      <HeaderProfil/>
      <CompteStyle>
      <PhraseAmicale/>
        <Wrapper
        initial={<>
        <img src="/icons8-settings-100.png" alt="" />
        <p>Compte courant Luca</p>
        </>}
        deroule="Placeholder compte 1"/>
        <Wrapper
        initial={<>
        <img src="/icons8-settings-100.png" alt="" />
        <p>Livret a Luca</p>
        </>}
        deroule={
        <>
        <div className="derouleCompte">
          <div className="conteneurContenuCompte">
              <p>Caisse d'épargne</p>
              <p>Epargne</p>
              <p>254,56€</p>
            </div>
            <div className="avatarAndName">
              <img src="/icons8-utilisateur-100-not-circle.png" alt="" />
              <p>Luca</p>
            </div>
          </div>
        </>
        }/>
        <LineWithPlus text="Ajouter un compte"/>
        </CompteStyle>
      </>
    )
  }
  
  export default Compte;