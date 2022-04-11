import React, { useContext } from 'react';

import ServiceCategory from '../components/ServiceCategory';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationServices.scss'

const ReservationServices = ({ servicesList }) => {

  const {chosenServices, setChosenServices} = useContext(StoreContext);
  const {progressBarWidth, setProgressBarWidth} = useContext(StoreContext);

  let temporaryChosenServices = [];

  // const progressBarMove = (e) => {
  //   if(e.target.textContent === 'LEWO'){
  //     if(progressBarWidth > 10){
  //       setProgressBarWidth(progressBarWidth - 20);
  //     }
  //   }else if(e.target.textContent === 'PRAWO'){
  //     if(progressBarWidth < 90){
  //       setProgressBarWidth(progressBarWidth + 20);

  //       const selected = document.querySelectorAll('#service');
  //       selected.forEach(service => {
  //         if(service.checked === true){
  //           console.log(service.getAttribute("serviceid"));
  //           temporaryChosenServices.push(service.getAttribute("serviceid"))
  //           console.log(temporaryChosenServices);
  //         }
  //       })

  //       setChosenServices(temporaryChosenServices);

  //       return;
  //     }
  //   }
  // }

  const handleBackBtn = () => {
    setChosenServices([]);
    setProgressBarWidth(0);
  }

  const servicesToShow = servicesList.map(category => {
    return <ServiceCategory servicesList={category.services} category={category.category} key={category.category}></ServiceCategory>
  })

  return ( 
    <>
     {servicesToShow}

    </>
   );
}
 
export default ReservationServices;