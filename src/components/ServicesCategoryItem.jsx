import React, { useState } from 'react';

const ServicesCategoryItem = ({itemText}) => {

  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  }

  return ( 
    <div className='service__list-item' onClick={checkboxHandler}>
      <span>{itemText}</span>
      <label className="service__list-checkbox-label">
        <input type="checkbox" checked={isChecked} onChange={checkboxHandler}/>
        <span className="service__list-checkbox-custom" ></span>
      </label>
    </div>
   );
}
 
export default ServicesCategoryItem;