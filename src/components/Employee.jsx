import React, { useContext } from 'react';

import { StoreContext } from '../store/StoreProvider';

const Employee = ({ number, name, photo }) => {

  const {setChosenEmployee} = useContext(StoreContext);
  const {setProgressBarWidth} = useContext(StoreContext);

  const handleEmployeeChoice = () => {
    setChosenEmployee(number);
    setProgressBarWidth(50);
  }

  return ( 
    <div className="employee" number={number} onClick={handleEmployeeChoice}>
      <div className="employee__photo" style={{backgroundImage: `url(${photo})`}}></div>
      <h2 className="employee__name">{name}</h2>
    </div>
   );
}
 
export default Employee;