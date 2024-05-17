/** ReadMe
 * This composant has been created for Profil and Compte, it create a line with a text (prop text) and a + on the right
 */

// Imports
import React from 'react';
import styled from 'styled-components';

// Styles
const LineWithPlusStyle = styled.div`
.InviteAndPlus {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
}
`

// Functions
const LineWithPlus = ({text}) => {
  // State
  //Comportement
  // Render
  return (
    <>
    <LineWithPlusStyle>
        <div className="InviteAndPlus">
            <p>{text}</p>
            <img src="/icons8-add-90.png" alt="+" />
        </div>
        </LineWithPlusStyle>
    </>
  );
};

export default LineWithPlus;