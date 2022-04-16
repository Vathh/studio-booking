import React, { useContext } from 'react';

import Employee from '../components/Employee'

import '../styles/ReservationEmployee.scss'

import { StoreContext } from '../store/StoreProvider';

import EmployeeIcon from '../img/employee__icon.jpg'

const ReservationEmployees = () => {

  const {city} = useContext(StoreContext);
  const {setProgressBarWidth} = useContext(StoreContext);
  const {setChosenServices} = useContext(StoreContext);

  const employees = [
    {
      id: 1,
      name: 'Urszula',
      photo: EmployeeIcon,
    },
    {
      id: 2,
      name: 'Angelika',
      photo: EmployeeIcon,
    },
    {
      id: 3,
      name: 'Barbara',
      photo: EmployeeIcon,
    }]

  const handleBackBtn = () => {
    setProgressBarWidth(10);
    setChosenServices([]);
  }

  const employeesToShow = employees.map(employee => {
    if(city === 2 && employee.id === 2){
      // eslint-disable-next-line array-callback-return
      return;
    }
    return <Employee key={employee.id} number={employee.id} name={employee.name} photo={employee.photo}/>
  })

  return ( 
    <div className='employees'>
      {employeesToShow}
      <button className="service__btn" onClick={handleBackBtn}>Cofnij</button>
    </div>
   );
}
 
export default ReservationEmployees;