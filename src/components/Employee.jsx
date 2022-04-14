import React from 'react';

const Employee = ({ number, name, photo }) => {
  return ( 
    <div className="employee" number={number}>
      <div className="employee__photo"></div>
      <h2 className="employee__name">{name}</h2>
    </div>
   );
}
 
export default Employee;