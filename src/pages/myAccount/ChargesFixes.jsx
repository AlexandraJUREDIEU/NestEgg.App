import HeaderProfil from "../../assets/layout/HeaderProfil";
import PhraseAmicale from "./PhraseAmicale";
import Wrapper from "../../assets/components/Wrapper";
import SectionInWrapper from "../../assets/components/SectionInWrapper";
import styled from "styled-components";

const ChargesFixesStyle = styled.main`
  .initialRessources {
    display:flex;
    align-items:center;
    justify-content:center;
    height:3em;
  }
.conteneurWrapper{
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:2em;
}
  `;

function ChargesFixes({activeUser, chargesFixes, bankAccount}) {

  // Sert à créer une liste de 0 à 31 pour les jours du mois
  const generateListOptions = () => {
    return Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  };

  // Génération d'une liste mise dans une variable
  const listOptions = generateListOptions();
    //State
    //Comportement
    //Render
    return (
      <>
      <HeaderProfil/>

      <ChargesFixesStyle>
        {/* le "Salut X" en ajoutant le prénom du user grace à la variable activeUser */}
        <PhraseAmicale activeUser={activeUser}/>

        <Wrapper
          initial={
          <>
            <div className="initialRessources">
              <p>Maison</p>
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
              <div>Abonnements</div>
            </div>
          </>}
          deroule={<>
          
          {/* Pendant le chargement de la page ou si pas de compte associé : affiche "Loading", sinon affiche toutes les charges fixes */}
          {bankAccount.length== 0 ? "Loading..." :chargesFixes.fixedCharges.map((charge, index) => (
            <SectionInWrapper
            key={index}
            // Pendant le chargement de la page ou si pas de compte associé : affiche "Loading", sinon affiche le nom de la charge fixe
            title={bankAccount.length == 0 ? "Loading..." : charge.nameCharge}
            text="Prélevé le"
            // Le day est par défaut sur 1 car la valeur n'a pas été créée sur la base de données //
            day="1"
            // La liste d'option est définie plus haut et est utilisée pour avoir 31 options dans le select des jours
            listOptions={listOptions}
            // Pendant le chargement de la page ou si pas de compte associé : affiche "Loading", sinon affiche le montant de la charge fixe
            valueAmount={bankAccount.length == 0 ? "Loading..." : charge.monthlyCharge}
            // Pendant le chargement de la page ou si pas de compte associé : affiche "Loading", sinon affiche le nom du compte associé à la charge fixe
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