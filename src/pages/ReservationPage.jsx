import React, { useContext, useState } from 'react';

import ProgressBarBall from '../components/ProgressBarBall';
import ServiceCategory from '../components/ServiceCategory';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationPage.scss'

const servicesList = [
  {category: 'Strzyżenie',
   services : ['Strzyżenie damskie', 'Strzyżenie męskie']
  },
  {category: 'Koloryzacja',
   services : ['Refleksy','Pasemka','Sombre','Dekoloryzacja']
  },
  {category: 'Stylizacja',
   services : ['Modelowanie', 'Fale', 'Upięcia']
  },
  {category: 'Zabiegi pielęgnacyjne',
   services : ['Nawilżanie arganowe', 'Nawilżanie keratynowe','Nawilżanie z kwasem hialuronowym','Regeneracja olaplex','Botoks']
  },
  {category: 'Inne',
   services : ['Styling','Mezoterapia skóry głowy']
  }
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
  
  const [progressBarWidth, setProgressBarWidth] = useState(10)  

  const progressBarMove = (e) => {
    if(e.target.textContent === 'LEWO'){
      if(progressBarWidth > 10){
        setProgressBarWidth(progressBarWidth - 20);
      }
    }else if(e.target.textContent === 'PRAWO'){
      if(progressBarWidth < 90){
        setProgressBarWidth(progressBarWidth + 20);
        return;
      }
    }
  }

  const progressBallsToShow = progressBallsData.map(ball => {
    return <ProgressBarBall title={ball.title} key={ball.value} progressBarWidth={progressBarWidth} value={ball.value} />
  })

  const servicesToShow = servicesList.map(category => {
    return <ServiceCategory servicesList={category.services} category={category.category} key={category.category}>chuj </ServiceCategory>
  })

  return ( 
    <div className="wrapper">
      <div className="progressBar">
        {progressBallsToShow}
        <div className="progressBar__bar" style={{width: `${progressBarWidth}%`, zIndex : '0'}}></div>
        <div className="progressBar__bar" style={{width: `90%`, backgroundColor: 'white'}}></div>
      </div>
      <button className="progressBar__btn" onClick={progressBarMove}>LEWO</button>
      <button className="progressBar__btn" onClick={progressBarMove}>PRAWO</button>
      {servicesToShow}
    </div>
   );
}
 
export default ReservationPage;