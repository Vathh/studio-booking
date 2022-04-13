import React, { useContext, useState } from 'react';

import ProgressBarBall from '../components/ProgressBarBall';
import ServiceCategory from '../components/ServiceCategory';
import City from '../bigComponents/City'
import ReservationServices from '../bigComponents/ReservationServices';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationPage.scss'
import ReservationEmployees from '../bigComponents/ReservationEmployees';

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

  const {isCityChosen, setIsCityChosen} = useContext(StoreContext);

  const {progressBarWidth, setProgressBarWidth} = useContext(StoreContext);

  const {city, setCity} = useContext(StoreContext);

  const handleCityChosen = () => {
    setIsCityChosen(!isCityChosen);
  }

  const progressBallsToShow = progressBallsData.map(ball => {
    return <ProgressBarBall title={ball.title} key={ball.value} progressBarWidth={progressBarWidth} value={ball.value} />
  })

  const progressBar = (<div className="progressBar">
                        {progressBallsToShow}
                        <div className="progressBar__bar" style={{width: `${progressBarWidth}%`, zIndex : '0'}}></div>
                        <div className="progressBar__bar" style={{width: `90%`, backgroundColor: 'white'}}></div>
                      </div>);


  return ( 
    <div className="wrapper">
      {!isCityChosen && <City clickHandler={handleCityChosen}/>}      
      {isCityChosen && progressBar}
      {isCityChosen && progressBarWidth === 10 && <ReservationServices servicesList={servicesList}/>}
      {isCityChosen && progressBarWidth === 30 && <ReservationEmployees/>}
      {/* <div className="employee">
        <h2 className="employee__header">Wybierz pracownika</h2>
        
      </div> */}
    </div>
   );
}
 
export default ReservationPage;