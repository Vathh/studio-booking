import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import NavLarge from './layouts/NavLarge';
import HomeHeader from './bigComponents/HomeHeader';
import Footer from './layouts/Footer';
import Page from './layouts/Page';

import './App.scss';

const App = () => {
  return ( 
    
    <Router>
      {<NavLarge />}
      {<HomeHeader />}
      <main>
        {<Page />}
      </main>
      {<Footer />}
    </Router>
    
   );
}
 
export default App;