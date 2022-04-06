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

  return ( 
    <StoreContext.Provider value={{
      user, setUser,
      chosenServices, setChosenServices
    }}>
      {children}
    </StoreContext.Provider>
   );
  }
  
  export default StoreProvider;