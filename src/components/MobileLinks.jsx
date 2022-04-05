import React, {useContext, useRef} from 'react';

import { Link } from 'react-router-dom';

import MobileLink from './MobileLink';

import '../styles/MobileLinks.scss';

import { StoreContext } from '../store/StoreProvider'

const MobileLinks = ({isVisible, toggleMobileLinks}) => {

  const {user, setUser} = useContext(StoreContext);

  const username = useRef(user)

  const mobileLinksData = [
    {
      title: 'Rezerwuj',
      toRef: '/reserve',
      delayTime: '0s'
    },
    {
      title: 'Twoje rezerwacje',
      toRef: '/yourReservations',
      delayTime: '.1s'
    },
    {
      title: 'Edytuj profil',
      toRef: '/management',
      delayTime: '.2s'
    },
  ]

  const navClassNames = isVisible ? 'nav nav--active' : 'nav'

  const loginMenu = <MobileLink onClick={toggleMobileLinks} title='Zaloguj się' delayTime='0s' isVisible={isVisible} toRef='/login'/>

  const userMenuLinks = mobileLinksData.map(link => {
    return <MobileLink key={link.title} onClick={toggleMobileLinks} title={link.title} delayTime={link.delayTime} isVisible={isVisible} toRef={link.toRef} logOutAction={link.logOutAction}/>
  })

  const logoutHandler = () => {
    setUser(null);
    toggleMobileLinks();
  }

  const userMenu = (
    <>
      <Link to='/' className='nav__item' style={isVisible ? {animation: `navItemsAnimation 1s 0s both`} : {animation: 'none'}}>{username.current.name}</Link>
      {userMenuLinks}
      <Link to='/' className='nav__item' style={isVisible ? {animation: `navItemsAnimation 1s .3s both`} : {animation: 'none'}} onClick={logoutHandler}>Wyloguj się</Link>
    </>
  )

  return ( 
    <nav className={navClassNames}>
        <div className="nav__items">
          {user ? userMenu : loginMenu}
        </div>
    </nav>
  );
}
 
export default MobileLinks;