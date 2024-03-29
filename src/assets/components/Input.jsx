/** ReadMe
 * This input needs different props : 
 * - type : determine the type of the input (text, number, email...) || REQUIRED
 * - placeholder : what is displayed by default inside the input || OPTIONNAL
 * - inputValue : the current value inside the input || REQUIRED
 * - handleChange : specify which function to call when the user updates the value of the input || REQUIRED
 * 
 */

// Import
import { useState } from "react";
import styled from "styled-components";

// Styles
const StyledInput = styled.input`
background-color: rgba(255, 255, 255, 0.2);
border-radius: 3.125em;
height: 3.25em;
margin: 0.5em;
width: 80vw;
padding: 0.75em;
-webkit-box-shadow: inset 0px 5px 5px 0px rgba(0,0,0,0.15); 
box-shadow: inset 0px 5px 5px 0px rgba(0,0,0,0.15);
  &:focus-visible{
    outline: none;
  }
`;

// Functions
function Input(props) {
  // State
  const [inputValue, setInputValue] = useState("");

  //Comportement
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  //Return
  return (
    <div>
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
export default Input;
