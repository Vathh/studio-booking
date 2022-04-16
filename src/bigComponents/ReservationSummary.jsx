import React, { useContext } from 'react';

import { servicesList } from '../pages/ReservationPage'
import { cities } from './City';

import { StoreContext } from '../store/StoreProvider';

const ReservationSummary = () => {

  const {chosenServices} = useContext(StoreContext);
  const {city} = useContext(StoreContext);
  const {chosenEmployee} = useContext(StoreContext);
  const {chosenDate} = useContext(StoreContext);
  const {chosenTime} = useContext(StoreContext);

  let cityName = '';

  cities.forEach(example => {
    if(example.id === city){
      cityName = example.title
    }
  })

  return ( 
    <div className="summary">
      <span className="summary__item">Miasto: {cityName}</span>
      <span className="summary__item">Usługi: {cityName}</span>
    </div>
   );
}
 
export default ReservationSummary;