import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.article`
display: flex;
flex-direction: column;
flex-grow: 1;

a{
display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.25);
gap: 2;
padding: 3em;
height: 20em;
border-radius: 4em;
width: 100%;
}
`

const Box = ({ id, href, onClickAction, className }) => {
  const handleClick = () => {
    if (onClickAction) {
      onClickAction(id);
    }
  };

  return (
    <BoxStyle className={className}>
      <a href={href} onClick={handleClick} className={className}>
        {id}
      </a>
    </BoxStyle>
  );
};

export default Box;
