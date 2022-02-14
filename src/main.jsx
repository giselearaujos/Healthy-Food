import React from 'react';
import ReactDOM from 'react-dom';
import './scss/Main.scss';

import Header from './Components/Header/index';
import Home from './Components/Home/index';
import MainCardFood from './Components/MainCardFood/index';
import MainServices from './Components/MainServices/index';
import MainCardBlog from './Components/MainCardBlog/index';
import MainSectionEnd from './Components/MainSectionEnd/index';



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <MainCardFood />
    <MainServices />
    <MainCardBlog />
    <MainSectionEnd />
  </React.StrictMode>,
  document.getElementById('root')
)
