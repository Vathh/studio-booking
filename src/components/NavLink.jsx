import React from 'react';

import { Link } from 'react-router-dom';

const NavLink = ({title, toRef}) => {
  return ( 
    <Link to={toRef} className="nav__box1-navitem">{title}</Link>
   );
}
 
export default NavLink;