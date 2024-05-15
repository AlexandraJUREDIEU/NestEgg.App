import HeaderProfil from "../../assets/layout/HeaderProfil";

import PhraseAmicale from "./PhraseAmicale";
import Wrapper from "../../assets/components/Wrapper";
import SectionInWrapper from "../../assets/components/SectionInWrapper";

import styled from "styled-components";

const ChargesFixesStyle = styled.main``;

function ChargesFixes() {
    //State
    //Comportement
    //Render
    return (
      <>
      <HeaderProfil/>

      <ChargesFixesStyle>
      <PhraseAmicale/>
        <Wrapper
          initial={
          <>
            <p>Maison</p>
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
              <div>Abonnements</div>
            </div>
          </>}
          deroule={<><SectionInWrapper
            title="Netflix"
            text="Prélevé le"
            listOptions={['01', '02', '03']}
          />
          <SectionInWrapper
            title="Netflix"
            text="Prélevé le"
            listOptions={['01', '02', '03']}
          />
        </>
        }
      />
      </ChargesFixesStyle>
      </>
    )
  }
  
  export default ChargesFixes;