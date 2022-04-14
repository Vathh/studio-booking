import React from 'react';

import Employee from '../components/Employee'

import '../styles/ReservationEmployee.scss'

const ReservationEmployees = () => {

  const employees = [
    {
      id: 1,
      name: 'Pracownik1',
      photo: '',
    },
    {
      id: 2,
      name: 'Pracownik2',
      photo: '',
    },
    {
      id: 3,
      name: 'Pracownik3',
      photo: '',
    }]

  const employeesToShow = employees.map(employee => {
    return <Employee key={employee.id} number={employee.id} name={employee.name} photo={employee.photo}/>
  })

  return ( 
    <div className='employees'>
      {employeesToShow}
    </div>
   );
}
 
export default ReservationEmployees;