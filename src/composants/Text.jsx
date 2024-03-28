import React from 'react';
import styled from 'styled-components';

const StyleText = styled.p`
color: red;
background-color:blue;
`;

function Text(props) {
  return (
  <>
        <StyleText>
            {props.text}
        </StyleText>
    </>);
}

export default Text;