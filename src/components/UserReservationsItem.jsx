import React from 'react';

import SummaryService from './SummaryService';

const UserReservationsItem = ({ city, services, employee, date, hour }) => {

  const servicesToShow = services.map(service => {
    return <SummaryService key={service} name={service}/>
  }) 

  return ( 
    <div className="userReservations__item">
      <span className="userReservations__item-data">Miasto: <i>{city}</i> </span>
      <div className="userReservations__item-data">Usługi: <span>{servicesToShow}</span> </div>
      <span className="userReservations__item-data">Pracownik: <i>{employee}</i> </span>
      <span className="userReservations__item-data">Data: <i>{date}</i> </span>
      <span className="userReservations__item-data">Godzina wizyty: <i>{hour}</i> </span>
    </div>
   );
}
 
export default UserReservationsItem;