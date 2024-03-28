import styled from 'styled-components'

const StyleButton = styled.button`
display: flex;
padding: 2em;
background-color: white;
color: black;
border-radius: 100vh;
blur: 19%;
box-shadow: 2em 1em 1em black;
`;


function Button(props) {
  // State





  //Comportement (click...)





  //Return (qu'est ce qu'il affche)
  return (<>
    {props.image}
      <StyleButton onClick={props.action}>
        {props.text}
      </StyleButton>
    </>);
}

export default Button;

/*

Composant 1: BUTTON
Button (texte, image ou icone, path, action) -> revoir vidéo 1h React (fin de vidéo)
Style (button) : flex, padding, bg-color, border-radius, box-shadow.
Style (span) : font-family.


Composant 2: HEADER
Function à voir
Style : flex, (position), z-index

Composant 3:  TEXT
Text (ClassName, span, variables)

Style H1:
Style (Class) :
Style text (font-family, size !!! en em, color, margin et padding, flex)

*/