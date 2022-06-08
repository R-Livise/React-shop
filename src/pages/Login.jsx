import React, { useRef } from 'react';
// Style
import '@styles/Login.sass'

// Components
import FormInput from '@components/FormInput';
import Button from '@components/Button';

// Svg
import LogoSale from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.warn(data)
  }
  return (
    <div className="Login">
      <div className="Login__form-container">
        <div className="Login__logo">
          <LogoSale className="icon-svg" />
        </div>
        <form action="/" className="Login_form" ref={form}>
          <FormInput label="Email address" name="email" type="text" placeholder="platzi@example.cm" />
          <FormInput label="Password" name="password" type="password" placeholder="*********" />
          <Button type="submit" variant="primary" onClick={handleSubmit}>Login</Button>


          <a href="/">Forgot my password</a>
        </form>
        <Button type="submit" variant="on-primary">Sign up</Button>
      </div>
    </div>
  )


};

export default Login;