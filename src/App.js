import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Aulas from './components/Aulas';
import Aula from './components/Aula';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Assistir from './components/Assistir';


import { createStore } from 'redux';
import { Provider } from 'react-redux'

import loginReducer from './reducers/loginReducers'

const store = createStore(loginReducer)

function App() {
  return (
    <Provider store={store}>
    <div className='container'>
          <Router>
            <Nav />
            <Routes>
              <Route path='/'  element={<Home/>} />
              <Route path='/aulas' element={<Aulas/>} />
              <Route path='/aulas/:id' element={<Aula/>} />
              <Route path='/sobre' element={<Sobre/>} />
              <Route path='/assistir' element={<Assistir/>} />
            </Routes>
          </Router>
      </div>
      </Provider>
  );
}

export default App;
