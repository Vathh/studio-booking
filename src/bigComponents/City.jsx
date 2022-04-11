import React, { useContext } from 'react';

import CityBtn from '../components/CityBtn';

import '../styles/City.scss'

import { StoreContext } from '../store/StoreProvider';

const City = ({ clickHandler }) => {

  const {city, setCity} = useContext(StoreContext);

  const cities = [
    { id: 1,
      title: 'Suwałki'
    },
    {
      id: 2,
      title: 'Augustów'
    }];

  const handleCityBtnClick = (e) => {
    clickHandler();
    setCity(e.target.getAttribute("id"))
  }

  const citiesToShow = cities.map(city => {
    return <CityBtn title={city.title} key={city.id} id={city.id} clickHandler={handleCityBtnClick}/>
  })

  return ( 
    <div className="city">
      <h2 className="city__header">Wybierz miasto</h2>
      <div className="city__offer">
        {citiesToShow}
      </div>
    </div>
   );
}
 
export default City;