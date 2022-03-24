import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavLink from '../components/NavLink';
import fryzlogo from '../img/fryzlogo.jpg'
import { StoreContext } from '../store/StoreProvider'

import '../styles/NavLarge.scss';

const NavLarge = () => {

  const navLinksData = [
      {
        title: <img src={fryzlogo} alt="Logo firmy - Studio fryzur. Urszula Kotowska."/>,
        ref: '/',
      }   
  ]

  const navLinkToDisplay = navLinksData.map(link => {
    return (
      <NavLink title={link.title} key={link.title} toRef={link.ref}/>
    )
  })

  const {user, setUser} = useContext(StoreContext);

  const setProperlyLabel = Boolean(user) ? 'Wyloguj się' : 'Zaloguj się';

  return ( 
    <nav className="nav__large">
      <div className="nav__box1">
        {navLinkToDisplay}
        <Link Link to='/' className='nav__box1-loginBtn'>{setProperlyLabel}</Link>
      </div>
    </nav>
   );
}
 
export default NavLarge;