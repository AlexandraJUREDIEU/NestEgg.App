import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div`
a{
    display: flex;
flex-direction: column;
background-color: rgba(255, 255, 255, 0.25);
gap: 2;
padding: 3em;
width: 20em;
height: 20em;
border-radius: 4em;
}
`

const Box = ({ id, href, onClickAction, className }) => {
  const handleClick = () => {
    if (onClickAction) {
      onClickAction(id);
    }
  };

  return (
    <BoxStyle>
      <a href={href} onClick={handleClick} className={className}>
        {id}
      </a>
    </BoxStyle>
  );
};

export default Box;
