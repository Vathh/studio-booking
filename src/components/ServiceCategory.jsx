import React from 'react';
import ServicesCategoryItem from './ServicesCategoryItem';

const ServiceCategory = ({category, servicesList}) => {

  const servicesListToShow = servicesList.map(service => {
    return <ServicesCategoryItem itemText={service.name} key={service.id} serviceid={service.id}/>
  })

  return ( 
    <div className="service">
      <div className="service__header" >
        <h3>{category}</h3>
      </div>
      <div className="service__list" >
        {servicesListToShow}
      </div>
    </div>
  );
}
 
export default ServiceCategory;