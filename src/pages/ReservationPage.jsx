import React, { useContext, useEffect } from 'react';

import ProgressBarBall from '../components/ProgressBarBall';
import City from '../bigComponents/City'
import ReservationServices from '../bigComponents/ReservationServices';
import ReservationDate from '../bigComponents/ReservationDate';
import ReservationSummary from '../bigComponents/ReservationSummary';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationPage.scss'
import ReservationEmployees from '../bigComponents/ReservationEmployees';

export const servicesList = [
  {category: 'Strzyżenie',
    services : [
      {id: '1', name: 'Strzyżenie damskie'},
      {id: '2', name: 'Strzyżenie męskie'}
     ]},
  {category: 'Koloryzacja',
    services : [
      {id: '3', name: 'Klasyczna koloryzacja'},
      {id: '4', name: 'Refleksy'},
      {id: '5', name: 'Pasemka'},
      {id: '6', name: 'Sombre'},
      {id: '7', name: 'Dekoloryzacja'}
    ]},
  {category: 'Stylizacja',
    services : [
      {id: '8', name: 'Modelowanie'},
      {id: '9', name: 'Fale'},
      {id: '10', name: 'Upięcia'}
    ]},
  {category: 'Zabiegi pielęgnacyjne',
    services : [
      {id: '11', name: 'Nawilżanie arganowe'},
      {id: '12', name: 'Nawilżanie keratynowe'},
      {id: '13', name: 'Nawilżanie z kwasem hialuronowym'},
      {id: '14', name: 'Regeneracja olaplex'},
      {id: '15', name: 'Botoks'}
    ]},
  {category: 'Inne',
    services : [
      {id: '16', name: 'Styling'},
      {id: '17', name: 'Mezoterapia skóry głowy'}
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
  const {setChosenServices} = useContext(StoreContext); 
  const {progressBarWidth, setProgressBarWidth} = useContext(StoreContext);
  const {setCity} = useContext(StoreContext);
  const {setChosenEmployee} = useContext(StoreContext);
  const {setChosenDate} = useContext(StoreContext);

  useEffect(() => {
    setChosenServices([]);
    setCity();
    setIsCityChosen(false);
    setChosenEmployee();   
    setChosenDate(); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCityChosen = () => {
    setIsCityChosen(!isCityChosen);
    setProgressBarWidth(10);
  }

  const progressBallsToShow = progressBallsData.map(ball => {
    return <ProgressBarBall title={ball.title} key={ball.value} progressBarWidth={progressBarWidth} value={ball.value} />
  })

  const progressBar = (<div className="progressBar">
                        {progressBallsToShow}
                        <div className="progressBar__bar" style={{width: `${progressBarWidth}%`, zIndex : '0'}}></div>
                        <div className="progressBar__bar" style={{width: `90%`, backgroundColor: 'white'}}></div>
                      </div>);

// storeReset();

  return ( 
    <div className="wrapper">
      {!isCityChosen && <City clickHandler={handleCityChosen}/>}      
      {isCityChosen && progressBar}
      {isCityChosen && progressBarWidth === 10 && <ReservationServices servicesList={servicesList}/>}
      {isCityChosen && progressBarWidth === 30 && <ReservationEmployees/>}
      {isCityChosen && progressBarWidth === 50 && <ReservationDate/>}
      {isCityChosen && progressBarWidth === 70 && <ReservationSummary/>}
    </div>
   );
}
 
export default ReservationPage;