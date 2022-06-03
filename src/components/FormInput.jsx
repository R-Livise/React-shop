import React from 'react';

import "../styles/FormInput.sass"
const FormInput = ({ type, label, placeholder, value, onChange }) => {

    // const [state,setState]=React.useState(setState)

    const typeInput = type || 'text'
    const idFor = `form-${typeInput}-${Math.trunc(Math.random() * 99)}`
    return (
        <div className='FormInput'>
            <label htmlFor={idFor} className="label">{label}</label>
            <input
                type={typeInput}
                id={idFor}
                placeholder={placeholder}
                value={value}
                className="input input-password"
                onChange={onChange}
            />
        </div>
    );
};

export default FormInput;