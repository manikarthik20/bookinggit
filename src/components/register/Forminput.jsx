import React, { useState } from 'react';
import '../register/RegisterInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange,onClick, id, ...inputProps } = props;


  const handleFocus = (e) => {
    setFocused(true);
  };



  return (
    <div className='registerFormInput'>
      <label className='registerLabel'>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} 
      focused={focused.toString()} className='registerInput'
      onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
      />
      <span className='registerSpan'>{errorMessage}</span>
    </div>
  )
}

export default FormInput;
