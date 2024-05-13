// Import
import React, { useState } from "react";
import styled from 'styled-components';

// Styles

const WrapperStyle = styled.div`
img {
  transform: rotate(90deg);
}
.nameAndMail{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}
.conteneurWrapper{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
`;



// Functions
function Wrapper({ initial, deroule }) {
  // State
  const [state, setState] = useState(false);

  // Comportement
  const changerEtat = () => {
    setState(!state);
  };

  const handleClickInside = (e) => {
    // Empêcher la propagation de l'événement lorsque vous cliquez à l'intérieur du wrapper
    e.stopPropagation();
  };

  // Render
  return (
    <WrapperStyle>
      <div className="conteneurWrapper" onClick={changerEtat}>
        <div className="nameAndMail">
          {state ? (
            <>
              {initial}
              <div onClick={handleClickInside}>{deroule}</div>
            </>
          ) : (
            <>{initial}</>
          )}
        </div>
        {state ? (
          <>
            <span className="fleche">
              <img src="icons8-back-100.png" alt="arrow to hide" />
            </span>
          </>
        ) : (
          <>
            <span className="fleche">
              <img src="icons8-forward-100.png" alt="arrow to show" />
            </span>
          </>
        )}
      </div>
    </WrapperStyle>
  );
}

export default Wrapper;