import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import '../styles/HomePage.scss'

import img from '../img/homepage_header.jpg';

import { StoreContext } from '../store/StoreProvider';

const LoginPage = () => {  

  const {user} = useContext(StoreContext);

  const logoutContent = (
    <div className="home__content">
      <h3 className="home__content-header">Zapraszamy do jednego z naszych salonów.</h3>
      <p className="home__content-text">W celu umówienia wizyty</p>
      <Link to="/login" className='home__content-btn'>Zaloguj się</Link>
      <p className="home__content-text">Nie masz jeszcze konta?</p>
      <Link to="/register" className='home__content-btn'>Zarejestruj się</Link>
    </div>
  )

  const loginContent = (
    <div className="home__content">
      <h3 className="home__content-header">Witaj w naszym systemie rezerwacji online.</h3>
      <p className="home__content-text">W celu umówienia wizyty</p>
      <Link to="/reserve" className='home__content-btn'>Kliknij tutaj</Link>
      <p className="home__content-text">Aby wyświetlić Twoje rezerwacje</p>
      <Link to="/reservations" className='home__content-btn'>Kliknij tutaj</Link>
    </div>
  )

  return ( 
    <div className='wrapper'>
      <div className="home">
        <div className="home__header" style={{backgroundImage: `url(${img})`}}>
          <div className="home__header-shadow"></div>
          <h2 className="home__header-top">rezerwacja online</h2>
          <p className="home__header-text">umówienie wizyty nigdy nie było łatwiejsze</p>
        </div>
        {user ? loginContent : logoutContent}
      </div>
    </div>
   );
}
 
export default LoginPage;