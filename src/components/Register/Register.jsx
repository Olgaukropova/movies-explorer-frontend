import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Register.css';
import logo from '../../logo.svg';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Preloader from '../Preloader/Preloader';

function Register({ onRegister, isLoading, loggedIn }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    handleEmailChange,
  } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    !loggedIn
      ? <main>
        <section className="register">
          <Link to="/" className="register__link">
            <img src={logo} className="register__logo" alt="лoготип"/>
          </Link>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <h1 className="form__header_register">Добро пожаловать!</h1>
            <li className="form__item_register">
              <label htmlFor="name">Имя</label>
              <input className="form__input_register"
                     type="text"
                     placeholder="Виталий"
                     name="name"
                     minLength={2}
                     maxLength={30}
                     onChange={handleChange}
                     value={values.name ?? ''}
                     required
              />
              <span className="form__error_validation_register">{errors.name}</span>
            </li>
            <li className="form__item_register">
              <label htmlFor="email">E-mail</label>
              <input className="form__input_register"
                     type="email"
                     placeholder="pochta@yandex.ru"
                     name="email"
                     onChange={handleEmailChange}
                     value={values.email ?? ''}
                     required
              />
              <span className="form__error_validation_register">{errors.email}</span>
            </li>
            <li className="form__item_register">
              <label htmlFor="password">Пароль</label>
              <input className="form__input_register"
                     type="password"
                     placeholder="пароль"
                     minLength={6}
                     maxLength={30}
                     name="password"
                     onChange={handleChange}
                     value={values.password ?? ''}
                     required
              />
              <span className="form__error_validation_register">{errors.password}</span>
            </li>
            {
              isLoading
                ? <Preloader/>
                : <div className="form__button-block">
                  <button className={`${isValid ? 'form__button-register' : 'form__button_disabled'}`} type="submit"
                          disabled={!isValid}>Зарегистрироваться
                  </button>
                  <p className="form__text_register">Уже зарегистрированы? <Link className="form__text_link_register"
                                                                                 to="/signin">Войти</Link>
                  </p>
                </div>
            }
          </form>
        </section>
      </main>
      : <Navigate to={'/'}/>
  );
}

export default Register;
