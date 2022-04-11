import React from 'react';

const CityBtn = ({ title, clickHandler, id }) => {
  return ( 
    <button className="city__offer-btn" id={id} onClick={clickHandler}>{title}</button>
   );
}
 
export default CityBtn;