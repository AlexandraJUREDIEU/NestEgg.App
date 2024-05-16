import HeaderProfil from "../../assets/layout/HeaderProfil";

import PhraseAmicale from "./PhraseAmicale";
import Wrapper from "../../assets/components/Wrapper";
import SectionInWrapper from "../../assets/components/SectionInWrapper";

import styled from "styled-components";

const ChargesFixesStyle = styled.main``;

function ChargesFixes({activeUser, chargesFixes, bankAccount}) {

  const generateListOptions = () => {
    return Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  };
  const listOptions = generateListOptions();
    //State
    //Comportement
    //Render
    return (
      <>
      <HeaderProfil/>

      <ChargesFixesStyle>
        <PhraseAmicale activeUser={activeUser}/>
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
          deroule={<>
          
          
          {bankAccount.length== 0 ? "Loading..." :chargesFixes.fixedCharges.map((charge, index) => (
          <SectionInWrapper
            key={index}
            title={bankAccount.length == 0 ? "Loading..." : charge.nameCharge}
            text="Prélevé le"
            day="1"
            listOptions={listOptions}
            valueAmount={bankAccount.length == 0 ? "Loading..." : charge.monthlyCharge + "€"}
            valueBank={bankAccount.length == 0 ? "Loading..." : bankAccount[0][0].nameBankAccount}
          />
          ))}
        </>
        }
      />
      </ChargesFixesStyle>
      </>
    )
  }
  
  export default ChargesFixes;