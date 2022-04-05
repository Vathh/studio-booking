import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';

import NavLink from '../components/NavLink';
import fryzlogo from '../img/fryzlogo.jpg'

import '../styles/NavLarge.scss';
import { StoreContext } from '../store/StoreProvider';

const NavLarge = () => {
  const {user, setUser} = useContext(StoreContext);

  const username = useRef(user);

  function logOutAction() {
    setUser(null);
  }

  const navLinksData = [
    {
      title: <img src={fryzlogo} alt="Logo firmy - Studio fryzur. Urszula Kotowska."/>,
      ref: '/',
    },  
  ]

  const navLinkToDisplay = navLinksData.map(link => {
    return (
      <NavLink title={link.title} key={link.title} toRef={link.ref}/>
    )
  })

  const userMenu = 
    <ul className='nav__box1-userMenu'>
      <li><Link to='/reserve'>Rezerwuj</Link></li>
      <li><Link to='/yourReservations'>Twoje rezerwacje</Link></li>
      <li><Link to='/management'>Edytuj profil</Link></li>
      <li><Link to='/' onClick={logOutAction}>Wyloguj się</Link></li>
    </ul>

  const userMenuBtn = 
    <span className='nav__box1-loginBtn nav__box1-userMenuBtn'>
      {username.current.name}
      {userMenu}
    </span>

  const logInBtn = <Link to='/login' className='nav__box1-loginBtn'>Zaloguj się</Link>

  const logInOutBtn = Boolean(user) ? userMenuBtn : logInBtn;

  return ( 
    <div className="wrapper">
      <nav className="nav__large">
        <div className="nav__box1">
          {navLinkToDisplay}
          {logInOutBtn}
        </div>
      </nav>
    </div>
   );
}
 
export default NavLarge;