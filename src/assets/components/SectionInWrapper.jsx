import React from 'react';
import styled from 'styled-components';
import {Input, Select} from './Input';
import { useState, useEffect } from "react";


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







const SectionInWrapper = ({ title, text, listOptions, day = 0, valueAmount, valueBank }) => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (value) => {
        setSelectedOption(value);
    };

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