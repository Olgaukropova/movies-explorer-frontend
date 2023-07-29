import React from 'react';
import "./Login.css";
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';


function Login() {

  return (
    <section className='login'>
      <Link to="/" className='login__link' >
        <img src={logo} classNamealt="login__logo" alt='лготип' />
      </Link>

      <form className="form" action="">
        <h2 className="form__header">Рады видеть!</h2>
        <li className="form__item">
          <label for="email">E-mail</label>
          <input className="form__input" type="email" placeholder="pochta@yandex.ru" name="email" />
        </li>
        <li className="form__item">
          <label for="password">Пароль</label>
          <input className="form__input" type="password" placeholder="пароль" minLength="3" maxLength="14" name="password" />
        </li>
        <button className="form__button">Войти</button>
        <p className="form__text">Уже зарегистрированы? <Link className='form__text_link' to='/signup'>Регистрация</Link> </p>
      </form >
    </section>
  )
}

export default Login;