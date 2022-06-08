import React from 'react';

import '@styles/Button.sass'

const Button = ({ type, variant, children, onClick }) => {

    const classVariant = variant ? `variant-${variant}` : "variant-primary"

    return (
        <button onClick={onClick} type={type || "submit"} className={classVariant + " Button"} >
            {children}
        </button>
    );
};

export default Button;