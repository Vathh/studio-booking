import React, { useContext, useState } from 'react';

import ProgressBarBall from '../components/ProgressBarBall';
import ServiceCategory from '../components/ServiceCategory';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationPage.scss'

const servicesList = [
  {category: 'Strzyżenie',
    services : [
      {id: '1', name: 'Strzyżenie damskie'},
      {id: '2', name: 'Strzyżenie męskie'}
     ]},
  {category: 'Koloryzacja',
    services : [
      {id: '3', name: 'Refleksy'},
      {id: '4', name: 'Pasemka'},
      {id: '5', name: 'Sombre'},
      {id: '6', name: 'Dekoloryzacja'}
    ]},
  {category: 'Stylizacja',
    services : [
      {id: '7', name: 'Modelowanie'},
      {id: '8', name: 'Fale'},
      {id: '9', name: 'Upięcia'}
    ]},
  {category: 'Zabiegi pielęgnacyjne',
    services : [
      {id: '10', name: 'Nawilżanie arganowe'},
      {id: '11', name: 'Nawilżanie keratynowe'},
      {id: '12', name: 'Nawilżanie z kwasem hialuronowym'},
      {id: '13', name: 'Regeneracja olaplex'},
      {id: '14', name: 'Botoks'}
    ]},
  {category: 'Inne',
    services : [
      {id: '15', name: 'Styling'},
      {id: '16', name: 'Mezoterapia skóry głowy'}
    ]}  
]

const progressBallsData = [
  {
    title: 'usługi',
    value: 10
  },
  {
    title: 'pracownik',
    value: 30
  },
  {
    title: 'termin',
    value: 50
  },
  {
    title: 'podsumowanie',
    value: 70
  },
  {
    title: 'gotowe',
    value: 90
  },
]

const ReservationPage = () => {

  const {chosenServices, setChosenServices} = useContext(StoreContext);

  let temporaryChosenServices = [];
  
  const [progressBarWidth, setProgressBarWidth] = useState(10)  

  const progressBarMove = (e) => {
    if(e.target.textContent === 'LEWO'){
      if(progressBarWidth > 10){
        setProgressBarWidth(progressBarWidth - 20);
      }
    }else if(e.target.textContent === 'PRAWO'){
      if(progressBarWidth < 90){
        setProgressBarWidth(progressBarWidth + 20);

        const selected = document.querySelectorAll('#service');
        selected.forEach(service => {
          if(service.checked === true){
            console.log(service.getAttribute("serviceid"));
            temporaryChosenServices.push(service.getAttribute("serviceid"))
            console.log(temporaryChosenServices);
          }
        })

        setChosenServices(temporaryChosenServices);

        return;
      }
    }
  }

  const progressBallsToShow = progressBallsData.map(ball => {
    return <ProgressBarBall title={ball.title} key={ball.value} progressBarWidth={progressBarWidth} value={ball.value} />
  })

  const servicesToShow = servicesList.map(category => {
    return <ServiceCategory servicesList={category.services} category={category.category} key={category.category}></ServiceCategory>
  })

  return ( 
    <div className="wrapper">
      <div className="progressBar">
        {progressBallsToShow}
        <div className="progressBar__bar" style={{width: `${progressBarWidth}%`, zIndex : '0'}}></div>
        <div className="progressBar__bar" style={{width: `90%`, backgroundColor: 'white'}}></div>
      </div>
      {progressBarWidth === 10 && servicesToShow}
      <button className="progressBar__btn" onClick={progressBarMove}>LEWO</button>
      <button className="progressBar__btn" onClick={progressBarMove}>PRAWO</button>
    </div>
   );
}
 
export default ReservationPage;