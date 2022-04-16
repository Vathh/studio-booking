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

  const [user, setUser] = useState(andrzejek);  
  const [chosenServices, setChosenServices] = useState([]);  
  const [progressBarWidth, setProgressBarWidth] = useState(10);
  const [city, setCity] = useState();
  const [isCityChosen, setIsCityChosen] = useState(false);
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
      chosenTime, setChosenTime
    }}>
      {children}
    </StoreContext.Provider>
   );
  }
  
  export default StoreProvider;