import React, { useState } from 'react';
import ServicesCategoryItem from './ServicesCategoryItem';

const ServiceCategory = ({category, servicesList}) => {

  const servicesListToShow = servicesList.map(service => {
    return <ServicesCategoryItem itemText={service} key={service}/>
  })

  const [isListVisible, setIsListVisible] = useState(false);

  const listVisibilityHandler = () => {
    setIsListVisible(!isListVisible);
  }

  return ( 
    <div className="service">
      <div className="service__header" onClick={listVisibilityHandler}>
        <h3>{category}</h3>
      </div>
      <div className="service__list" style={isListVisible ? {display: 'block'} : {display: 'none'}}>
        {servicesListToShow}
      </div>
    </div>
  );
}
 
export default ServiceCategory;