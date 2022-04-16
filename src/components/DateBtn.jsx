import React, { useContext } from 'react';

import { StoreContext } from '../store/StoreProvider';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const DateBtn = ({ date }) => {

  const {setChosenDate} = useContext(StoreContext);

  const polishDayOfWeek = date.toLocaleString('pl', { weekday: 'short' });
  const polishMonth = date.toLocaleString('pl', { month: 'long' });

  const dayToShow = capitalizeFirstLetter(polishDayOfWeek).slice(0, -1);
  const dayOfMonth = date.getDate();
  const monthToShow = capitalizeFirstLetter(polishMonth);

  const handleChoiceBtn = () => {
    setChosenDate(date);
  }

  return ( 
    <div className="date__btn" onClick={handleChoiceBtn}>
      <span className="date__btn-description">{dayToShow}</span>
      <span className="date__btn-description">{dayOfMonth}</span>
      <span className="date__btn-description">{monthToShow}</span>
    </div>
   );
}
 
export default DateBtn;