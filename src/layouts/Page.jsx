import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage'
import ReservationPage from '../pages/ReservationPage';
import UserReservationsPage from '../pages/UserReservationsPage';

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
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/reserve" element={<ReservationPage/>}/>
      <Route path="/reservations" element={<UserReservationsPage/>}/>
    </Routes>    
   );
}
 
export default Page;