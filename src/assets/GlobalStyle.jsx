import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
};   


body {
    width: 100vw;
    font-family: "Quicksand";
    color: white;
    font-size: 1em;
    text-align: center;
    overflow-x: hidden;
    background: rgb(92, 39, 116);
    background: linear-gradient(180deg, rgba(92, 39, 116, 1) 0%, rgba(57, 96, 203, 1) 100%);
    };

a:hover{
    color: white;
}

a{
    color: yellow;
}

.balmy{
    font-family: "balmy";
}

`;

export default GlobalStyle;