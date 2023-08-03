import React from 'react';
import logo from "../../logo.svg";
import "./Header.css";
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SwitchButton from '../SwitchButton/SwitchButton';
import ButtonLogin from '../ButtonLogin/ButtonLogin';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="логотип" />
      </Link>
      {(pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') ? (
        <>
          <Navigation />
          <SwitchButton />
          <BurgerMenu />
        </>
      ) : (
        <>
          <ButtonLogin />
        </>
      )}
    </header>
  );
}

export default Header;

