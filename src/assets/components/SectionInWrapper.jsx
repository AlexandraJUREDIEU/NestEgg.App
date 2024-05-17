/* ReadMe
 * Ce composant est créé pour les pages Ressources et Charges Fixes:
 * 
 * Détermine tout ce qui sera affiché dans le composant:
 * title : nom de la section || REQUIRED
 * valueAmount : coût de la section || REQUIRED
 * text : texte affiché au début de la seconde ligne || REQUIRED
 * day : jour du mois où la section prend effet (default 1) || OPTIONNAL
 * 
 * valueBank : nom du compte associé à la section || REQUIRED
 * listOptions : options associé au Select || REQUIRED
 * */

import React from 'react';
import styled from 'styled-components';
import {Select} from './Input';


const StyledSectionInWrapper = styled.span`

display:flex;
flex-direction:column;
align-items:center;

input {
    width:100%;
}

.titleAndInput, .textAndSelactAndInput {
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    width:100%;
}

.textAndSelect {
    display:flex;
    flex-direction:row;
}

select{
    display:flex;
    align-items:center;
}
`;

const SectionInWrapper = ({ title, text, listOptions, day = 1, valueAmount, valueBank }) => {
    return (
        <>
        <StyledSectionInWrapper>
            <div className="titleAndInput">
                <p>{title}</p> <div>{valueAmount}</div>
            </div>
            <div className="textAndSelactAndInput">
                <div className="textAndSelect">
                    <p>{text}</p>
                    <Select
                        options={listOptions}
                        value={day}
                    />
                </div>
                <div>{valueBank}</div>
            </div>
          </StyledSectionInWrapper>
        </>
    );    
}

export default SectionInWrapper;