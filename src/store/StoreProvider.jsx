import React, {createContext, useState} from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {  

  const andrzejek = {
    id: '1',
    login: 'andrzejek',
    password: 'golota',
    name: 'Andrzej',
    surname: 'Gołota',
    phoneNumber: '123 456 789'
  }

  const rezerwacja1 = {
    id: 1,
    user: andrzejek,
    city: 'Suwałki',
    services: ['Strzyżenie damskie', 'Botoks'],
    employee: 'Angelika',
    date: '28/04/2022',
    time: '10:30'
  }

  const rezerwacja2 = {
    id: 2,
    user: andrzejek,
    city: 'Suwałki',
    services: ['Strzyżenie męskie', 'Pasemka'],
    employee: 'Urszula',
    date: '4/05/2022',
    time: '12:30'
  }

  const rezerwacje = [rezerwacja1 , rezerwacja2]

  const [reservations, setReservations] = useState(rezerwacje);
  const [user, setUser] = useState(andrzejek);  
  const [progressBarWidth, setProgressBarWidth] = useState(10);
  const [isCityChosen, setIsCityChosen] = useState(false);
  const [city, setCity] = useState();
  const [chosenServices, setChosenServices] = useState([]);  
  const [chosenEmployee, setChosenEmployee] = useState();
  const [chosenDate, setChosenDate] = useState();
  const [chosenTime, setChosenTime] = useState();

  return ( 
    <StoreContext.Provider value={{
      user, setUser,
      chosenServices, setChosenServices,
      progressBarWidth, setProgressBarWidth,
      city, setCity,
      isCityChosen, setIsCityChosen,
      chosenEmployee, setChosenEmployee,
      chosenDate, setChosenDate,
      chosenTime, setChosenTime,
      reservations, setReservations
    }}>
      {children}
    </StoreContext.Provider>
   );
  }
  
  export default StoreProvider;