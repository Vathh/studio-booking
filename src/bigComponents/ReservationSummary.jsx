import React, { useContext } from 'react';
import { cities } from './City';
import SummaryService from '../components/SummaryService';

import { StoreContext } from '../store/StoreProvider';

import '../styles/ReservationSummary.scss'

const employees = [
  {
    id: 1,
    name: 'Urszula'
  },
  {
    id: 2,
    name: 'Angelika'
  },
  {
    id: 3,
    name: 'Barbara'
  }]

const allServices = [
  {id: '1', name: 'Strzyżenie damskie'},
  {id: '2', name: 'Strzyżenie męskie'},
  {id: '3', name: 'Klasyczna koloryzacja'},
  {id: '4', name: 'Refleksy'},
  {id: '5', name: 'Pasemka'},
  {id: '6', name: 'Sombre'},
  {id: '7', name: 'Dekoloryzacja'},
  {id: '8', name: 'Modelowanie'},
  {id: '9', name: 'Fale'},
  {id: '10', name: 'Upięcia'},
  {id: '11', name: 'Nawilżanie arganowe'},
  {id: '12', name: 'Nawilżanie keratynowe'},
  {id: '13', name: 'Nawilżanie z kwasem hialuronowym'},
  {id: '14', name: 'Regeneracja olaplex'},
  {id: '15', name: 'Botoks'},
  {id: '16', name: 'Styling'},
  {id: '17', name: 'Mezoterapia skóry głowy'}
]

const allHours = [
  {id: 0, hour: '09:00'},
  {id: 1, hour: '09:30'},
  {id: 2, hour: '10:00'},
  {id: 3, hour: '10:30'},
  {id: 4, hour: '11:00'},
  {id: 5, hour: '11:30'},
  {id: 6, hour: '12:00'},
  {id: 7, hour: '12:30'},
  {id: 8, hour: '13:00'},
  {id: 9, hour: '13:30'},
  {id: 10, hour: '14:00'},
  {id: 11, hour: '14:30'},
  {id: 12, hour: '15:00'},
  {id: 13, hour: '15:30'},
  {id: 14, hour: '16:00'},
  {id: 15, hour: '16:30'},
  {id: 16, hour: '17:00'}
]

const ReservationSummary = () => {

  const {chosenServices} = useContext(StoreContext);
  const {city} = useContext(StoreContext);
  const {chosenEmployee} = useContext(StoreContext);
  const {chosenDate} = useContext(StoreContext);
  const {chosenTime, setChosenTime} = useContext(StoreContext);
  const {setProgressBarWidth} = useContext(StoreContext);

  const cityName = cities.find(example => example.id === city);

  const services = allServices.map(service => {
    if(chosenServices.includes(service.id)){
      return <SummaryService key={service.id} name={service.name}/>
    }else{
      // eslint-disable-next-line array-callback-return
      return;
    }
  })

  const hour = (allHours.find(hour => hour.id === chosenTime)).hour;

  const employee = (employees.find(example => example.id === chosenEmployee)).name;

  const date = `${chosenDate.toLocaleString('pl', { weekday: 'long' })} ${chosenDate.getDate()} ${chosenDate.toLocaleString('pl', { month: 'long' })} ${chosenDate.getFullYear()}`

  const handleBackBtn = () => {
    setProgressBarWidth(50);
    setChosenTime();
  }

  const handleSubmitBtn = () => {
    
  }

  return ( 
    <div className="summary">
      <span className="summary__item">Miasto: <i>{cityName.title}</i> </span>
      <div className="summary__item">Usługi: <i>{services}</i> </div>
      <span className="summary__item">Pracownik: <i>{employee}</i> </span>
      <span className="summary__item">Data: <i>{date}</i> </span>
      <span className="summary__item">Godzina wizyty: <i>{hour}</i> </span>
      <button className="service__btn" onClick={handleSubmitBtn}>Zatwierdź</button>
      <button className="service__btn" onClick={handleBackBtn}>Cofnij</button>
    </div>
   );
}
 
export default ReservationSummary;