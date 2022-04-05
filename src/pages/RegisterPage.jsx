import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'; 

import '../styles/RegisterPage.scss'

const passRegex = new RegExp("^(?=.*?[0-9])(?=.*?[#?!,.@$%^&*-])")

const RegisterPage = () => {
  const checkIcon = <i className="fas fa-check"></i>;
  const timesIcon = <i className="fas fa-times"></i>;

  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [sex, setSex] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [isPasswordLongEnough, setIsPasswordLongEnough] = useState(false);
  const [isMarkPassword, setIsMarkPassword] = useState(false);

  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleSurnameInput = (e) => {
    setSurname(e.target.value);
  }

  const handleLoginInput = (e) => {
    setLogin(e.target.value);
  }

  const handlePhoneNumberInput = (e) => {
    setPhoneNumber(e.target.value);
  }

  // const handleSexSelect = (e) => {
  //   setSex(e.target.value)
  // }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);

    if(e.target.value.length >= 8 && e.target.value.length <= 32){
      setIsPasswordLongEnough(true);
    }else{
      setIsPasswordLongEnough(false);      
    }

    if(passRegex.test(e.target.value)){
      setIsMarkPassword(true);
    }else{
      setIsMarkPassword(false);
    }
  }

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleRepeatPasswordInput = (e) => {
    setRepeatPassword(e.target.value);
  }

  const handleRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible(!isRepeatPasswordVisible);
  }

  const handleRegisterBtn = () => {

    const newUserData = {
      "Login": login,
      'Password': password,
      'Name': name,
      'Surname': surname,
      'PhoneNumber': phoneNumber
    }

    fetch('https://localhost:44357/api/Users', {
      method: 'POST',
      mode: 'cors', 
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserData) 
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return ( 
    <div className='wrapper'>
      <div className="registerPanel">
        <h3 className="registerPanel-header">Rejestracja użytkownika</h3>
        
        <div className="registerPanel__inputContainer">
          <input type="text" placeholder='Imię' value={name} onChange={handleNameInput} className='registerPanel-input'/>
        </div>

        <div className="registerPanel__inputContainer">
          <input type="text" placeholder='Nazwisko' value={surname} onChange={handleSurnameInput} className='registerPanel-input'/>
        </div>

        <div className="registerPanel__inputContainer">
          <input type="text" placeholder='Login' className='registerPanel-input' value={login} onChange={handleLoginInput}/>
        </div>
        <div className="registerPanel__inputContainer">
          <input type="tel" placeholder='Numer telefonu' value={phoneNumber} onChange={handlePhoneNumberInput} className='registerPanel-input'/>
        </div>

        <div className="registerPanel__inputContainer">
          <div className="registerPanel__password">
            <input type={isPasswordVisible ? 'text' : 'password'} placeholder='Hasło' className='registerPanel-input registerPanel-password' value={password} onChange={handlePasswordInput}/>
            <button className="registerPanel__password-btn" onClick={handlePasswordVisibility}><i className="fas fa-eye"></i></button>
          </div>

          <div className="registerPanel__password-requirements">
            <span className="registerPanel__password-requirements-item" style={isPasswordLongEnough ? {color: 'green'} : {color: 'red'}}>{isPasswordLongEnough ? checkIcon : timesIcon}8-32 znaków</span>
            <span className="registerPanel__password-requirements-item" style={isMarkPassword ? {color: 'green'} : {color: 'red'}}>{isMarkPassword ? checkIcon : timesIcon}cyfra i znak specjalny</span>            
          </div>
        </div>    

        <div className="registerPanel__inputContainer">
          <div className="registerPanel__password">
            <input type={isRepeatPasswordVisible ? 'text' : 'password'} placeholder='Powtórz hasło' className='registerPanel-input registerPanel-password' value={repeatPassword} onChange={handleRepeatPasswordInput}/>
            <button className="registerPanel__password-btn" onClick={handleRepeatPasswordVisibility}><i className="fas fa-eye"></i></button>
          </div>
        </div>

        <p className="registerPanel-approval">Rejestrując się jednocześnie akceptujesz <Link to="/rules">Regulamin</Link></p>

        <button className="registerPanel-btn" onClick={handleRegisterBtn}>Rejestracja</button>
        
        <Link to="/login" className='registerPanel-backToLoginBtn'>Powrót do ekranu logowania</Link>
      </div>
    </div>
   );
}
 
export default RegisterPage;