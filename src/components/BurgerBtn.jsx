import React from 'react';

import '../styles/BurgerBtn.scss';

const BurgerBtn = ({toggleMobileLinks}) => {
  
  return (
    <button className="burger-btn" onClick={toggleMobileLinks}>
        <div className="burger-btn__box">
            <div className="burger-btn__bars"></div>
        </div>
    </button>
  );
}
 
export default BurgerBtn;