import React from 'react';
import "./BurgerMenu.css";
import { Link } from 'react-router-dom';
import icon from '../../images/user-user.svg';

function BurgerMenu() {
  return (
    <section className='menu'>
           <nav className='menu__nav'>
      <button className='menu__button-delete'></button>
        <ul className='menu__list'>
          <li className='menu__list_main'>Главная</li>
          <li className='menu__list_mov'>
            <Link className='menu__list_mov_movies' to="/movies">Фильмы</Link>
            <Link className='menu__list_mov__saved' to="/saved-movies">Сохранённые фильмы</Link>
          </li>
          <li className='menu__list_page'>
            <Link className='button__block' to='/profile'>
              <p className='button__text'>Аккаунт</p>
              <div className='button__icon'>
                <img className='button__img' src={icon} alt="иконка юзер" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default BurgerMenu;