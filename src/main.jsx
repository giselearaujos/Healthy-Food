import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

import Header from './Components/Header/index';

import './scss/Main.scss';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes />    
  </BrowserRouter>,
  document.getElementById('root')
)
