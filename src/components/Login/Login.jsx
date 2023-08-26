import React from 'react';
import './Login.css';
import logo from '../../logo.svg';
import { Link, Navigate } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';


function Login({ onLogin, isLoading, loggedIn }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    handleEmailChange,
  } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: values.email,
      password: values.password
    });
  };


  return (
    !loggedIn
      ? <main>
        <section className="login">
          <Link to="/" className="login__link">
            <img src={logo} className="login__logo" alt="логотип"/>
          </Link>
          <form className="form" onSubmit={handleSubmit} noValidate>
            <h1 className="form__header">Рады видеть!</h1>
            <li className="form__item">
              <label htmlFor="email">E-mail</label>
              <input className="form__input"
                     type="email"
                     placeholder="pochta@yandex.ru"
                     name="email"
                     onChange={handleEmailChange}
                     value={values.email ?? ''}
                     required
              />
              <span className="form__error_validation_register">{errors.email}</span>
            </li>
            <li className="form__item">
              <label htmlFor="password">Пароль</label>
              <input className="form__input"
                     type="password"
                     placeholder="пароль"
                     minLength={6}
                     maxLength={30}
                     name="password" onChange={handleChange}
                     value={values.password ?? ''}
                     required
              />
              <span className="form__error_validation_register">{errors.password}</span>
            </li>
            {
              isLoading
                ? <Preloader/>
                : <div className="form__button-block">
                  {/*{message && <span className="form__error_register">{message}</span>}*/}
                  <button className={`${isValid ? 'form__button' : 'form__button_disabled'}`}
                          type="submit"
                          disabled={!isValid}
                  >Войти
                  </button>
                  <p className="form__text">Ещё не зарегистрированы?
                    <Link className="form__text_link" to="/signup">Регистрация</Link>
                  </p>
                </div>
            }
          </form>
        </section>
      </main>
      : <Navigate to={'/'}/>
  );
}

export default Login;
