import React, { useContext } from 'react';

import HourBtn from '../components/HourBtn'

import { StoreContext } from '../store/StoreProvider';

const HourBtns = () => {

  const {chosenDate} = useContext(StoreContext);
  const {chosenServices} = useContext(StoreContext);

  const servicesIncludesColouring = chosenServices.includes('3') ? true : false;

  const servicesIncludesHighlights = chosenServices.includes('5') ? true : false;

  const hours = [];

  if(chosenDate.getDay() === 6){
    for(let i = 0; i < 9; i++){
      const hour = Math.floor(9 + i/2) < 10 ? '09' : Math.floor(9 + i/2);
      const minutes = (i%2) === 1 ? '30' : '00';
      if((servicesIncludesColouring && hour > 12)){
        continue;
      }
      if((servicesIncludesHighlights && (hour > 12 || (hour === 12 && minutes === '30')))){
        continue;
      }
      hours.push({
        number: i,
        text: `${hour}:${minutes}` 
      })      
    }
  }else{
    for(let i = 0; i < 17; i++){
      const hour = Math.floor(9 + i/2) < 10 ? '09' : Math.floor(9 + i/2);
      const minutes = (i%2) === 1 ? '30' : '00';
      if((servicesIncludesColouring && hour > 16)){
        continue;
      }
      if((servicesIncludesHighlights && (hour > 16 || (hour === 16 && minutes === '30')))){
        continue;
      }
      hours.push({
        number: i,
        text: `${hour}:${minutes}` 
      })      
    }
  }
    
  const hoursToShow = hours.map(hour => {
    return <HourBtn number={hour.number} key={hour.number} text={hour.text}/>
  })

  const handleBackBtn = () => {
    
  }

  return ( 
    <>
      <div className="hour">
        {hoursToShow}
      </div>
      <button className="service__btn" onClick={handleBackBtn}>Cofnij</button>
    </>
   );
}
 
export default HourBtns;