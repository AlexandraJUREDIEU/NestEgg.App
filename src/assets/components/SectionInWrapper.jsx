import React from 'react';
// import styled from 'styled-components';
import {Input, Select} from './Input';
import { useState, useEffect } from "react";
const SectionInWrapper = ({ title, text, className }) => {

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
    ];

    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <>
            <div>
                <p>{title}</p> <Input name="ammount" type="number" />
                <p>{text}</p> <Input name="date" type="number" />
                <Select
                    options={options}
                    onChange={handleSelectChange}
                    value={selectedOption}
                />
            </div>
        </>
    );
}

export default SectionInWrapper;