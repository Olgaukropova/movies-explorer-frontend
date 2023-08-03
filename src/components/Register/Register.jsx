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
        <h2 className="form__header_register">Добро пожаловать!</h2>
        <li className="form__item_register">
          <label for="name">Имя</label>
          <input className="form__input_register" type="text" placeholder="Виталий" name="name" min={3} max={15} required />
        </li>
        <li className="form__item_register">
          <label for="email">E-mail</label>
          <input className="form__input_register" type="email" placeholder="pochta@yandex.ru" name="email" required />
        </li>
        <li className="form__item_register">
          <label for="password">Пароль</label>
          <input className="form__input_register" type="password" placeholder="пароль" minLength="3" maxLength="14" name="password" required />
        </li>
        <span className='form__error_register'>Что-то пошло не так...</span>
        <button className="form__button-register">Зарегистрироваться</button>
        <p className="form__text_register">Уже зарегистрированы? <Link className='form__text_link_register' to='/signin'>Войти</Link> </p>
      </form >
    </section>
  )
}

export default Register;