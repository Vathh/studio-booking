import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import HomeHeader from './bigComponents/HomeHeader';
import Footer from './layouts/Footer';
import Page from './layouts/Page';
import StoreProvider from './store/StoreProvider';
import Nav from './layouts/Nav';

import './App.scss';

const App = () => {
  return ( 
    
    <StoreProvider>
      <Router>
      {<Nav />}
      {<HomeHeader />}
      <main>
        {<Page />}
      </main>
      {<Footer />}
    </Router>
    </StoreProvider>
    
   );
}
 
export default App;