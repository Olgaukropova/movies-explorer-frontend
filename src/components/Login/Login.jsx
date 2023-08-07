import React from 'react';
import "./Login.css";
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';


function Login() {

  return (
    <main>
      <section className='login'>
        <Link to="/" className='login__link' >
          <img src={logo} className="login__logo" alt='логотип' />
        </Link>
        <form className="form" >
          <h1 className="form__header">Рады видеть!</h1>
          <li className="form__item">
            <label htmlFor="email">E-mail</label>
            <input className="form__input" type="email" placeholder="pochta@yandex.ru" name="email" required />
          </li>
          <li className="form__item">
            <label htmlFor="password" >Пароль</label>
            <input className="form__input" type="password" placeholder="пароль" minLength="3" maxLength="14" name="password" required />
          </li>
          <button className="form__button" type='submit'>Войти</button>
          <p className="form__text">Ещё не зарегистрированы?<Link className='form__text_link' to='/signup'>Регистрация</Link> </p>
        </form >
      </section>
    </main>
  )
}

export default Login;