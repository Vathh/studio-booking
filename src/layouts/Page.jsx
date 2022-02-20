import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Page = () => {

  const location = useLocation();

  useEffect(()=> {
    if (location.hash !== '') {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
      window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location])

  return (     
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>    
   );
}
 
export default Page;