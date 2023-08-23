import React from 'react';
import logo from "../../logo.svg";
import "./Header.css";
import "../Navigation/Navigation.css";
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SwitchButton from '../SwitchButton/SwitchButton';
import ButtonLogin from '../ButtonLogin/ButtonLogin';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({loggedIn}) {
  const location = useLocation();
  const pathname = location.pathname;
  const[openBurgerMenu ,setOpenBurgerMenu] = React.useState(false);

const handleBurgerMenu = () => {
  setOpenBurgerMenu(true)
}

const closeBurgerMenu = () => {
  setOpenBurgerMenu(false)
}

  return (
    <header className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="логотип" />
      </Link>
      {/* {(pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') ? (
        <>
          <Navigation />
          <SwitchButton 
          onBurgerMenu={handleBurgerMenu}
          />
          <BurgerMenu
           isOpen ={openBurgerMenu}
           onClose={closeBurgerMenu}
           />
        </>
      ) : (
        <>
          <ButtonLogin />
        </>
      )} */}
       {pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? (
      <>
        <Navigation />
        <SwitchButton onBurgerMenu={handleBurgerMenu} />
        <BurgerMenu isOpen={openBurgerMenu} onClose={closeBurgerMenu} />
      </>
    ) : (
      <>
        {loggedIn ? (
          <>
            <Navigation />
            <SwitchButton onBurgerMenu={handleBurgerMenu} />
            <BurgerMenu isOpen={openBurgerMenu} onClose={closeBurgerMenu} />
          </>
        ) : (
          <>
            <ButtonLogin />
          </>
        )}
      </>
    )}
    </header>
  );
}

export default Header;

