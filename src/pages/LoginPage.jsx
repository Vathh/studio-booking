import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import '../styles/LoginPage.scss'

const LoginPage = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const[isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLoginInput = (e) => {
    setLogin(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }
  
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return ( 
    <div className='wrapper'>
      <div className="loginPanel">
        <h3 className='loginPanel-header'>Logowanie</h3>
        <input type="text" placeholder='Login' className='loginPanel-input' value={login} onChange={handleLoginInput}/>
        <div className="loginPanel__password">
          <input type={isPasswordVisible ? 'text' : 'password'} placeholder='Hasło' className='loginPanel-input loginPanel-password' value={password} onChange={handlePasswordInput}/>
          <button className="loginPanel__password-btn" onClick={handlePasswordVisibility}><i className="fas fa-eye"></i></button>
        </div>
        <button className='loginPanel-btn'>Zaloguj się</button>
        <p className="loginPanel-text">Nie masz jeszcze konta?</p>
        <Link to="/register" className='loginPanel-registerBtn'>Zarejestruj się</Link>
      </div>
    </div>
   );
}
 
export default LoginPage;