import React, { useContext } from 'react';

import ServiceCategory from '../components/ServiceCategory';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationServices.scss'

const ReservationServices = ({ servicesList }) => {

  const {setChosenServices} = useContext(StoreContext);
  const {setProgressBarWidth} = useContext(StoreContext);
  const {setIsCityChosen} = useContext(StoreContext);
  const {setCity} = useContext(StoreContext);

  let temporaryChosenServices = [];

  const handleBackBtn = () => {
    setChosenServices([]);
    setProgressBarWidth(0);
    setIsCityChosen(false);
    setCity();
  }

  const handleForwardBtn = () => {
    const selected = document.querySelectorAll('#service');

    selected.forEach(service => {
      if(service.checked === true){
        temporaryChosenServices.push(parseInt(service.getAttribute("serviceid")));
      }
    })      

    setChosenServices(temporaryChosenServices);
    setProgressBarWidth(30);
    return;
  }

  const servicesToShow = servicesList.map(category => {
    return <ServiceCategory servicesList={category.services} category={category.category} key={category.category}></ServiceCategory>
  })

  return ( 
    <>
     {servicesToShow}
     <div className="service__btns">
      <button className="service__btn" onClick={handleBackBtn}>Cofnij</button>
      <button className="service__btn" onClick={handleForwardBtn}>Zatwierdź</button>
     </div>
    </>
   );
}
 
export default ReservationServices;