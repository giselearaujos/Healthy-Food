import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/">
        <h1 className="header__container__title">
          Healty Food
        </h1>
      </Link>
      <ul className="header__container__nav">
        <li className="header__container__nav__li">HEALTHY RECIPES</li>
        <li className="header__container__nav__li">BLOG</li>
        <li className="header__container__nav__li">JOIN</li>
        <Link to="/register">
          <button className="header__container__nav__li__btn">
            Register
          </button>
        </Link>
      </ul>
    </header>
  )
};

export default Header;