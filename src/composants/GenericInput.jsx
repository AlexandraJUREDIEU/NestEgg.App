import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.20);
  border-radius: 3.125em;
  height: 3.25em;
  margin: 0.5em;
  width: 80vw;
  padding: 0.75em;
`;

function GenericInput({ type, placeholder, value, onChange }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default GenericInput;
