import React from 'react';
import "./BurgerMenu.css";
import { NavLink } from 'react-router-dom';
import icon from '../../images/user-user.svg';

function BurgerMenu({isOpen, onClose}) {

  const isActive = (match) => {
    if (match.isActive) {
  return "menu__list_mov_movies active menu__list_mov_movies_active";
} else {
  return "menu__list_mov_movies";
}
};

  return (
    <section className={`menu ${isOpen ? 'burger_opened' : ''}`}>
      <nav className='menu__nav'>
        <button className='menu__button-delete' type='button' onClick={onClose}></button>
        <ul className='menu__list'>
          <li className='menu__list_main'>
            <NavLink className='menu__list_main-link' to='/'>Главная</NavLink>
            </li>
          <li className='menu__list_mov'>
            <NavLink className={isActive} to="/movies">Фильмы</NavLink>
            <NavLink className={isActive} to="/saved-movies">Сохранённые фильмы</NavLink>
          </li>
          <li className='menu__list_page'>
            <NavLink className='button__block' to='/profile'>
              <p className='button__text'>Аккаунт</p>
              <div className='button__icon'>
                <img className='button__img' src={icon} alt="иконка юзер" />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default BurgerMenu;