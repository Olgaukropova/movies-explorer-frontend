import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import logo from '../../logo.svg'

function Register({ onRegister }) {
  // const [name, setName] = React.useState({ name: '' });
  // const [email, setEmail] = React.useState({ email: '' });
  // const [password, setPassword] = React.useState({ password: '' });
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({});


  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    // Валидация
    const validationErrors = {};
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s-]{3,15}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]{2,}$/i;

    if (!name) {
      validationErrors.name = 'Пожалуйста, введите имя';

    } else if (name.length < 3 || name.length > 15) {
      validationErrors.name = 'Поле должно содержать не менее 3 и не более 15 символов';
    } else if (!nameRegex.test(name)) {
      validationErrors.name = 'Поле должно содержать только латиницу, кириллицу, пробел или дефис';
    }

    if (!email) {
      validationErrors.email = 'Пожалуйста, введите email';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Пожалуйста, введите корректный email адрес';
    }

    if (!password) {
      validationErrors.password = 'Пожалуйста, введите пароль';
    } else if (password.length < 8 || password.length > 14) {
      validationErrors.password = 'Пароль должен содержать не менее 8 и не более 14 символов';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('Пожалуйста, заполните все поля');
      return;
    }

    onRegister({
      name,
      email,
      password
    });
    setMessage('Что-то пошло не так! Попробуйте ещё раз')
  }

  return (
    <main>
      <section className='register'>
        <Link to="/" className='register__link' >
          <img src={logo} className="register__logo" alt='лoготип' />
        </Link>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <h1 className="form__header_register">Добро пожаловать!</h1>
          <li className="form__item_register">
            <label htmlFor="name">Имя</label>
            <input className="form__input_register" type="text" placeholder="Виталий" name="name" minLength={3} maxLength={15} onChange={handleChangeName} />
            {errors.name && <span className='form__error_validation_register'>{errors.name}</span>}
          </li>
          <li className="form__item_register">
            <label htmlFor="email">E-mail</label>
            <input className="form__input_register" type="text" placeholder="pochta@yandex.ru" name="email" onChange={handleChangeEmail} />
            {errors.email && <span className='form__error_validation_register'>{errors.email}</span>}          </li>
          <li className="form__item_register">
            <label htmlFor="password">Пароль</label>
            <input className="form__input_register" type="password" placeholder="пароль" minLength={3} maxLength={14} name="password" onChange={handleChangePassword} />
            {errors.password && <span className='form__error_validation_register'>{errors.password}</span>}
          </li>
          <div className='form__button-block'>
            {message && <span className='form__error_register'>{message}</span>}
            <button className="form__button-register" type='submit'>Зарегистрироваться</button>
            <p className="form__text_register">Уже зарегистрированы? <Link className='form__text_link_register' to='/signin'>Войти</Link> </p>
          </div>
        </form >
      </section>
    </main>
  )
}

export default Register;