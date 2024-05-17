import HeaderProfil from "../../assets/layout/HeaderProfil";

import SectionInWrapper from "../../assets/components/SectionInWrapper";
import Wrapper from "../../assets/components/Wrapper";
import PhraseAmicale from "./PhraseAmicale";

import styled from 'styled-components';


const RessourcesStyle = styled.main`
  .initialRessources{
  display:flex;
  align-items:center;
  justify-content:space-between;
  }

  .conteneurWrapper{
    background-color: rgba(255, 255, 255, 0.5);
    border-radius:2em;
  }
`;

function Ressources({activeUser}) {
    //State
    //Comportement
    //Render
    return (
      <>
      <HeaderProfil/>
      <RessourcesStyle>
          <PhraseAmicale activeUser={activeUser}/>
          <Wrapper
            initial={
            <>
            <div className="initialRessources">
              <img src="/icons8-utilisateur-100-not-circle.png" alt="" />
              <p>Luca</p>
              </div>
            </>}
            deroule={
            <>
              Placeholder salaires Luca
            </>}
            />
          <Wrapper
            initial={<>
              <div className="initialRessources">
                <img src="/icons8-utilisateur-100-not-circle.png" alt="" />
                <div>SOSO LE PELICAN</div>
              </div>
            </>}
            deroule={
            <>
            <SectionInWrapper
              title="Salaire N°1"
              text="Arrive vers le"
              listOptions={['01', '02', '03']}
            />
            <SectionInWrapper
              title="Salaire N°2"
              text="Arrive vers le"
              listOptions={['01', '02', '03']}
            />
            <SectionInWrapper
              title="Salaire N°3"
              text="Arrive vers le"
              listOptions={['01', '02', '03']}
            /></>
          }
          />
          {/* Le day des SectionInWrapper est par défaut sur 1 car la valeur n'a pas été créé sur la base de données*/}
          






        </RessourcesStyle>
      </>
    )
  }
  
  export default Ressources;