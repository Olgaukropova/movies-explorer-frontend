import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import logo from '../../logo.svg'

function Register() {

  return (
    <section className='register'>
      <Link to="/" className='register__link' >
        <img src={logo} classNamealt="register__logo" alt='лготип' />
      </Link>

      <form className="form" action="">
        <h2 className="form__header">Добро пожаловать!</h2>
        <li className="form__item">
          <label for="name">Имя</label>
          <input className="form__input" type="text" placeholder="Виталий" name="name" />
        </li>
        <li className="form__item">
          <label for="email">E-mail</label>
          <input className="form__input" type="email" placeholder="pochta@yandex.ru" name="email" />
        </li>
        <li className="form__item">
          <label for="password">Пароль</label>
          <input className="form__input" type="password" placeholder="пароль" minLength="3" maxLength="14" name="password" />
        </li>
        <span className='form__error'>Что-то пошло не так...</span>
        <button className="form__button-register">Зарегистрироваться</button>
        <p className="form__text">Уже зарегистрированы? <Link className='form__text_link' to='/signin'>Войти</Link> </p>
      </form >
    </section>
  )
}

export default Register;