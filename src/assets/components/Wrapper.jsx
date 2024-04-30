// Import
import React, { useState } from "react";

// Styles

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
    <div onClick={changerEtat}>
      {state ? (
        <>
          {initial}
          <span className="fleche">^</span>
          <div onClick={handleClickInside}>{deroule}</div>
        </>
      ) : (
        <>
          {initial}
          <span className="fleche">V</span>
        </>
      )}
    </div>
  );
}

export default Wrapper;