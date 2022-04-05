import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/MobileLinks.scss'

const MobileLink = ({onClick, title, delayTime, isVisible, toRef}) => {

  return (  
    <Link to={toRef} className='nav__item' style={isVisible ? {animation: `navItemsAnimation 1s ${delayTime} both`} : {animation: 'none'}} onClick={onClick}>{title}</Link>
  );
}
 
export default MobileLink;