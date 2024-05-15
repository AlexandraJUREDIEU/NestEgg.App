

import styled from "styled-components";

const Style = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:1em;
`;


function PhraseAmicale() {
    //State
    //Comportement
    //Render
    return (
      <>
      <Style>
        <h1>Bonjour Luca</h1>
        <p>Plus que 158 jours pour remplir votre objectif</p>
        </Style>
      </>
    );
  }
  
  export default PhraseAmicale;