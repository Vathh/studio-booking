import React, { useContext } from 'react';

import DateBtn from '../components/DateBtn';

import { StoreContext } from '../store/StoreProvider';

const DateBtns = () => {

  const {city} = useContext(StoreContext);
  const {chosenEmployee} = useContext(StoreContext);
  const {setProgressBarWidth} = useContext(StoreContext);
  const {setChosenDate} = useContext(StoreContext);

  const isDayAvailable = (day) => {
    
    if(day.getDay() === 0){
      return false;
    }

    if (city === 1){
      if(chosenEmployee === 1){
        if(day.getDay() === 1 || day.getDay() === 3 || day.getDay() === 5){
          return true;
        }
      }else if(chosenEmployee === 2){
        return true;
      }else if(chosenEmployee === 3){
        if(day.getDay() === 2 || day.getDay() === 4){
          return true;
        }
      }
    }

    if (city === 2){
      if(chosenEmployee === 1){
        if(day.getDay() === 2 || day.getDay() === 4){
          return true;
        }
      }else if(chosenEmployee === 2){
        return false;
      }else if(chosenEmployee === 3){
        if(day.getDay() === 1 || day.getDay() === 3 || day.getDay() === 5){
          return true;
        }
      }
    }

    return false;
  }

  const handleBackBtn = () => {
    setProgressBarWidth(30);
    setChosenDate();
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() ;
  const currentDay = currentDate.getDate();
  const firstAvailableDay = currentDay + 1;

  const availableDays = [];

  for(let i = 0; i <= 27; i++){
    const temporaryDay = new Date(currentYear,currentMonth,firstAvailableDay+i);
    if(isDayAvailable(temporaryDay)){
      availableDays.push(temporaryDay)
    }    
  }

  const availableDaysToShow = availableDays.map(day => {
    return <DateBtn key={day.getDate()} date={day} />
  })

  return ( 
    <>
      <div className="date__btns">
        {availableDaysToShow}
      </div>
      <button className="service__btn" onClick={handleBackBtn}>Cofnij</button>
    </>
   );
}
 
export default DateBtns;