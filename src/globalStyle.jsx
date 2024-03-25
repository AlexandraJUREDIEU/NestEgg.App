// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
      box-sizing: border-box;
      font-family: "Quicksand";
      color: white;
      font-size: 1em;
      margin: 0;
      padding: 0;
      border: 0;
      text-align: center;
  }
  
  body {
      background: rgb(92, 39, 116);
      background: linear-gradient(180deg, rgba(92, 39, 116, 1) 0%, rgba(57, 96, 203, 1) 100%);
      width: 100vw;
      overflow-x: hidden;
  }
  
  .scroller {
      height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
  }
  
  .item-scroll {
      scroll-snap-align: start;
  }
  
  h1 {
      font-size: 2.5em;
      font-weight: 300;
      text-transform: uppercase;
  }
  
  li,
  a {
      list-style: none;
      text-decoration: none;
  }
  
  span {
      font-family: "Balmy";
  }
  
  .balmy {
      font-family: "Balmy";
  }
`;

export default GlobalStyle;
