import React, { useContext } from 'react';
import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';
import icon from '../../images/user-user.svg';
import { ScreenTypeContext } from '../../context/ScreenTypeContext';
import { NAVIGATOR, SCREEN } from '../../utils/vars';

function BurgerMenu({ isOpen, onClose }) {

  const screenType = useContext(ScreenTypeContext);

  const isActive = (match) => {
    if (match.isActive) {
      return 'menu__list_mov_movies active menu__list_mov_movies_active';
    } else {
      return 'menu__list_mov_movies';
    }
  };

  return (
    screenType !== SCREEN.desktop.type && <section className={`menu ${isOpen ? 'burger_opened' : ''}`}>
      <nav className="menu__nav">
        <button className="menu__button-delete" type="button" onClick={onClose}></button>
        <ul className="menu__list">
          <li className="menu__list_main">
            <NavLink className="menu__list_main-link" to={NAVIGATOR.MAIN}>Главная</NavLink>
          </li>
          <li className="menu__list_mov">
            <NavLink className={isActive} to={NAVIGATOR.MOVIES}>Фильмы</NavLink>
            <NavLink className={isActive} to={NAVIGATOR.SAVED_MOVIES}>Сохранённые фильмы</NavLink>
          </li>
          <li className="menu__list_page">
            <NavLink className="button__block" to={NAVIGATOR.PROFILE}>
              <p className="button__text">Аккаунт</p>
              <div className="button__icon">
                <img className="button__img" src={icon} alt="иконка юзер"/>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default BurgerMenu;
