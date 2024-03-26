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