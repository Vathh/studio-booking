import React from 'react';

import NavLink from '../components/NavLink';
import fryzlogo from '../img/fryzlogo.jpg'

import '../styles/NavLarge.scss';

const NavLarge = () => {

  const navLinksData = [    
      {
        title: 'Strona główna',
        ref: '/',
      }, 
      {
        title: 'O nas',
        ref: '/#aboutusN',
      },
      {
        title: <img src={fryzlogo} alt="Logo firmy - Studio fryzur. Urszula Kotowska."/>,
        ref: '/',
      },
      {
        title: 'Usługi',
        ref: '/services',
      },
      {
        title: 'Cennik',
        ref: '/pricelist',
      },
      {
        title: 'Kontakt',
        ref: '/#contact',
      },    
  ]

  const navLinksToDisplay = navLinksData.map(link => {
    return (
      <NavLink title={link.title} key={link.title} toRef={link.ref}/>
    )
  })

  return ( 
    <nav className="nav__large">
      <div className="nav__box1">
        {navLinksToDisplay}
      </div>
    </nav>
   );
}
 
export default NavLarge;