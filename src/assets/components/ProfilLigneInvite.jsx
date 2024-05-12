/** ReadMe
 * This composant has been done for the page profile with the props:
 * - name || REQUIRED
 * - mail || REQUIRED
 */

// Imports
import React from 'react';
import styled from 'styled-components';

// Styles
const ProfilLigneInviteStyle = styled.div`
    .nameAndMail{
        background-color: rgba(255, 255, 255, 0.5);
        display:flex;
        flex-direction:row;
        flex-grow:100;
        justify-content:space-between;
    }
    .line{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
`

// Functions
const Box = ({name, mail}) => {
  // State
  
    // Comportement
    const handleClick = () => {
    if (onClickAction) {
      onClickAction(id);
    }
  };

  // Render
  return (
    <>
    <ProfilLigneInviteStyle>
        <div className="line">
            <div className="nameAndMail">
                <div>{name}</div>
                <div>{mail}</div>
            </div>
            <img src="" alt="" />X
        </div>
        </ProfilLigneInviteStyle>
    </>
  );
};

export default Box;