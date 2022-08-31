import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Aulas from './components/Aulas';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'

function App() {
  return (

    <div className='container'>
          <Router>
            <Nav />
            <Routes>
              <Route path='/'  element={<Home/>} />
              <Route path='/aulas' element={<Aulas/>} />
              <Route path='/sobre' element={<Sobre/>} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
