import React from 'react';
import ReactDOM from 'react-dom';
import './scss/Main.scss';

import Header from './Components/Header/index';
import Home from './Components/Home/index';



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
