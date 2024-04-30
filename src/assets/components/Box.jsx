/** ReadMe
 * This is a box which contains the stucture : <article><a><a/><article/>
 * This box needs different props : 
 * - id : defines the ID of the article || OPTIONNAL
 * - href : defines the path where the <a> will send you || OPTIONNAL
 * - OnClickAction : the action when you click on the box || OPTIONNAL 
 * - className : give a class to the button || OPTIONNAL
 * - Children : What will be inside the box || REQUIRED
 */

// Imports
import React from 'react';
import styled from 'styled-components';

// Styles
const BoxStyle = styled.article`
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.25);
width:152px;
height:100px;
border-radius: 4em;


    a{
    display: flex;
    flex-direction: column;
    }


    .div-container-boxes {
      display:flex;
      flex-direction: row;
      outline: green 5px solid;
    }

    article {
      /*outline: red 3px solid;*/
    }
    .short-box{
      /*outline: orange 4px solid;*/
    }
    .long-box{
      /*outline: yellow 4px solid;*/
    }
    h3{
      /*outline: blue 2px solid;*/
    }

    
`

// Functions
const Box = ({ id, href, onClickAction, className, children }) => {
  // State
  
    // Comportement
    const handleClick = () => {
    if (onClickAction) {
      onClickAction(id);
    }
  };

  // Render
  return (
    <BoxStyle className={className}>
      <a href={href} onClick={handleClick} className={className}>
       
      </a> {children}
    </BoxStyle>
  );
};

export default Box;