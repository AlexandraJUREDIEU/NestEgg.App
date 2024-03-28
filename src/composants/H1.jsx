import React from "react";
import styled from "styled-components";

const StyleH1 = styled.p`
  font-size: 2.5em;
  font-weight: 300;
  text-transform: uppercase;
`;

function H1(props) {
  return (
    <>
      <StyleH1>{props.text}</StyleH1>
    </>
  );
}

export default H1;
