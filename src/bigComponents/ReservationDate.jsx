import React, { useContext } from 'react';

import DateBtns from './DateBtns';
import HourBtns from './HourBtns';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationDate.scss';

const ReservationDate = () => {

  const {chosenDate} = useContext(StoreContext);

  return ( 
    <div className="date">
      {!chosenDate && <DateBtns/>}
      {chosenDate && <HourBtns/>}
    </div>
   );
}
 
export default ReservationDate;