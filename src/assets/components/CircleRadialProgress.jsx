//https://codepen.io/geedmo/pen/DggoNx

// Import
import { useState } from "react";
import styled from "styled-components";

// Styles
const StyledCircleRadialProgress = styled.StyledCircleRadialProgress`



* {
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .progress-radial {
    --size: 20rem;
    
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: rgba(0 0 0 / .2);
  }
  
  .progress {
    --color: rgba(0 0 0 / 0);
    --offset: 0%;
    --size: 0%;
    
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background:
      radial-gradient(closest-side, rgba(0 0 0 / .2) 90%, transparent 90%),
      conic-gradient(
        rgba(0 0 0 / 0) var(--offset),
        var(--color) var(--offset) calc(var(--offset) + var(--size)),
        rgba(0 0 0 / 0) calc(var(--offset) + var(--size))
      )
    ;
  }
  
  #progress-1 {
    --color: hsl(0 100% 50%);
    --size: 50%;
  }
  
  #progress-2 {
    --color: hsl(225 100% 50%);
    --offset: 50%;
    --size: 20%;
  }
  
  #progress-3 {
    --color: hsl(45 100% 50%);
    --offset: 70%;
    --size: 30%;
  }
  