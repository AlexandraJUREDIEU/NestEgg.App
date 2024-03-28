//import
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styles
const ButtonStyle = styled.button`
display:flex;
align-items: center;
justify-content: space-between;
padding: 0.5em 2.5em;
background-color: rgba(255,255,255,0.5);    
border-radius: 6.25em;
-webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); 
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
color: white;
margin: auto;
border: none;
`;

const LinkStyle = styled(Link)`
color: white;
text-decoration: none;
font-size: 1.5em;
`

// Functions
export default function Button(props){
     // State
     //Comportement
    //return
    return (
        <>
        <ButtonStyle><LinkStyle to="/">{props.content}</LinkStyle></ButtonStyle>
        </>
    )
};

