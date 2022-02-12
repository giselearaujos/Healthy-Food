import React from 'react';
import Button from '../Button/index';

const Header = () => {
  return (
    <header className="header__container">
      <h1 className="header__container__title">Healty Food</h1>
      <ul className="header__container__nav">
        <li className="header__container__nav__li">HEALTHY RECIPES</li>
        <li className="header__container__nav__li">BLOG</li>
        <li className="header__container__nav__li">JOIN</li>
        <Button text="REGISTER" />
      </ul>
    </header>
  )
};

export default Header;