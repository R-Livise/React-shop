import React from 'react';

import Button from '@components/Button';


import IconEmail from "@icons/email.svg"
import LogoSale from "@logos/logo_yard_sale.svg"

import '@styles/RecoveryPassword.sass'


const RecoveryPassword = () => {


    return (
        <div className="login">
            <div className="form-container">
                <LogoSale className="icon-svg" />

                <h1 className="Recovery__title">Email has been sent!</h1>
                <p className="Recovery__subtitle">Please check your inbox for instructions on how to reset the password</p>

                <div className="email-image">
                    <IconEmail />
                </div>
                <Button type="submit" variant="primary">Login</Button>

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default RecoveryPassword;