import React, { useContext } from 'react';

import img from '../img/userReservationPage_header.jpg'
import { StoreContext } from '../store/StoreProvider';
import UserReservationsItem from '../components/UserReservationsItem';

import '../styles/UserReservationsPage.scss'

const UserReservationsPage = () => {

  const {reservations} = useContext(StoreContext);

  const userReservations = reservations.map(reservation => {
    return <UserReservationsItem key={reservation.id} city={reservation.city} services={reservation.services} employee={reservation.employee} date={reservation.date} hour={reservation.time}/>
  })

  return ( 
    <div className="userReservations">
      <div className="userReservations__header" style={{backgroundImage: `url(${img})`}}>
        <div className="userReservations__header-shadow"></div>
        <h2 className="userReservations__header-top">Twoje rezerwacje</h2>      
      </div>
      {userReservations}
    </div>
   );
}
 
export default UserReservationsPage;