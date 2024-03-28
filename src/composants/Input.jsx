
import React, { useState } from 'react';
import GenericInput from './GenericInput';

function MyForm(props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <GenericInput
        type={props.type}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
export default MyForm;




