import styled from "styled-components";

const ButtonStyle = styled.button`
display:flex;
align-items: center;
justify-content: space-between;
padding:0.25em;
background-color: rgba(255,255,255,0.5);    
border-radius: 6.25em;
-webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); 
box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
color: white;
margin: auto;
`;

export default function Button(props){
    return (
        <>
        <ButtonStyle><a href="/">{props.content}</a></ButtonStyle>
        </>
    )
};

