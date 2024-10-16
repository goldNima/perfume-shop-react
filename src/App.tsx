import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

import React, { useEffect } from 'react';


import { Home } from './pages/home';

import { Cart } from './router/cart';
import { Log } from './router/log';
import { Dashboard } from './router/dashboard';
import { PanelAdmin } from './router/panelAdmin';
import { Movie } from './router/movie';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';



function App() {

  useEffect(()=>{
    Aos.init({
      duration : 1000,
    });
  } ,[])

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Log' element={<Log />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/PanelAdmin' element={<PanelAdmin />} />
            <Route path='/Movie' element={<Movie />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
