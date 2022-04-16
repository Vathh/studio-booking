import React, { useContext } from 'react';

import { StoreContext } from '../store/StoreProvider';

const HourBtn = ({ number, text }) => {

  const {setChosenTime} = useContext(StoreContext);
  const {setProgressBarWidth} = useContext(StoreContext);

  const handleTimeChoice = () => {
    setChosenTime(number);
    setProgressBarWidth(70);
  }

  return ( 
    <div className="hour__btn" onClick={handleTimeChoice}>
      <span className="hour__btn-text">{text}</span>
    </div>
   );
}
 
export default HourBtn;