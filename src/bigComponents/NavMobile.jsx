import React, { useState, useContext } from 'react';

import MobileLinks from '../components/MobileLinks';
import BurgerBtn from '../components/BurgerBtn';

const NavMobile = () => {

  const [isMobileLinksVisible, setIsMobileLinksVisible] = useState(false); 

  const toggleMobileLinks = () => {
    setIsMobileLinksVisible(!isMobileLinksVisible)
  }

  return ( 
    <>
      <BurgerBtn toggleMobileLinks={toggleMobileLinks}/>
      <MobileLinks isVisible={isMobileLinksVisible} toggleMobileLinks={toggleMobileLinks}/>
    </>
   );
}
 
export default NavMobile;