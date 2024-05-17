import styled from "styled-components";

const Style = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:1em;
`;


function PhraseAmicale({activeUser}) {
    //State
    
    //Comportement
    //Render
    return (
      <>
        <Style>
          {/* activeUser.name récupère le nom du User */}
        <h1>Bonjour {activeUser.name}</h1>
        <p>Plus que [placeholder] jours pour remplir votre objectif</p>
        </Style>
      </>
    );
  }
  
  export default PhraseAmicale;