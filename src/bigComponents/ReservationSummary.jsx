import React, { useContext } from 'react';
import { cities } from './City';
import { StoreContext } from '../store/StoreProvider';

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

const ReservationSummary = () => {

  const {chosenServices} = useContext(StoreContext);
  const {city} = useContext(StoreContext);
  const {chosenEmployee} = useContext(StoreContext);
  const {chosenDate} = useContext(StoreContext);
  const {chosenTime} = useContext(StoreContext);

  const cityName = cities.find(example => example.id === city);

  const services = allServices.map(service => {
    if(chosenServices.includes(service.id)){
      return service.name;
    }else{
      // eslint-disable-next-line array-callback-return
      return;
    }
  })

  const employee = (employees.find(example => example.id === chosenEmployee)).name;

  return ( 
    <div className="summary">
      <span className="summary__item">Miasto: {cityName.title}</span>
      <span className="summary__item">Usługi: {services}</span>
      <span className="summary__item">Pracownik: {employee}</span>
    </div>
   );
}
 
export default ReservationSummary;