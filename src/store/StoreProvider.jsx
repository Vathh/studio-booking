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

  return ( 
    <StoreContext.Provider value={{
      user, setUser,
    }}>
      {children}
    </StoreContext.Provider>
   );
  }
  
  export default StoreProvider;
  
  // categories, setCategories, 
  // care, other, stylization, shearing, colouring


// const servicesCare = ['Nawilżanie arganowe', 'Nawilżanie keratynowe','Nawilżanie z kwasem hialuronowym','Regeneracja olaplex','Botoks'];
// const servicesColouring = ['Refleksy','Pasemka','Sombre','Dekoloryzacja'];
// const servicesShearing = ['Strzyżenie damskie', 'Strzyżenie męskie'];
// const servicesStylization = ['Modelowanie', 'Fale', 'Upięcia'];
// const servicesOther = ['Styling','Mezoterapia skóry głowy']


// const [categories, setCategories] = useState(null);
  // const [care, setCare] = useState(servicesCare);
  // const [colouring, setColouring] = useState(servicesColouring);
  // const [shearing, setShearing] = useState(servicesShearing);
  // const [stylization, setStylization] = useState(servicesStylization);
  // const [other, setOther] = useState(servicesOther);