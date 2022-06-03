import React from 'react';
// Style
import '../styles/Login.sass'

// Components
import FormInput from '../components/FormInput';
import Button from '../components/Button';

// Svg
import LogoSale from '../assets/logos/logo_yard_sale.svg'

const Login = () => {
  return (
    <div className="Login">
      <div className="Login__form-container">
        <div className="Login__logo">
          <LogoSale className="icon-svg" />
        </div>
        <form action="/" className="Login_form">
          <FormInput label="Email address" type="text" placeholder="platzi@example.cm" />
          <FormInput label="Password" type="password" placeholder="*********" />
          <Button type="submit" variant="primary">Login</Button>


          <a href="/">Forgot my password</a>
        </form>
        <Button type="submit" variant="on-primary">Sign up</Button>
      </div>
    </div>
  )


};

export default Login;