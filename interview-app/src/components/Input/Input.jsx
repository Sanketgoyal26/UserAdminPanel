import React from 'react';
import './Input.css';

const Input = ({ label, placeholder, value, name, onChange, type="text", dynamicStyles={} }) => {
  return (
    <div className='input-container'>
        <label className='input-label'>{label} <span style={{ color: "red" }}>*</span></label>
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            name={name}
            onChange={onChange}
            className='input-field'
            style={dynamicStyles}
        />
    </div>
  );
}

export default Input;
