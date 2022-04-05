import React from 'react';

import NavLarge from '../bigComponents/NavLarge';
import NavMobile from '../bigComponents/NavMobile';

import useWindowWidth from '../hooks/useWindowWidth'

const Nav = () => {

  const { width } = useWindowWidth();

  return ( 
    (width > 767) ? <NavLarge /> : <NavMobile/>
   );
}
 
export default Nav;