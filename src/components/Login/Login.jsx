import React from 'react';
import "./Login.css";
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';


function Login({ onLogin, serverErrors }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({});
  

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Пожалуйста, введите email';
    }

    if (!password) {
      validationErrors.password = 'Пожалуйста, введите пароль';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('Пожалуйста, заполните все поля');
      return;
    }

    onLogin({
      email,
      password
    });
    setMessage('Что-то пошло не так! Попробуйте ещё раз')
  }


  return (
    <main>
      <section className='login'>
        <Link to="/" className='login__link' >
          <img src={logo} className="login__logo" alt='логотип' />
        </Link>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <h1 className="form__header">Рады видеть!</h1>
          <li className="form__item">
            <label htmlFor="email">E-mail</label>
            <input className="form__input" type="email" placeholder="pochta@yandex.ru" name="email" onChange={handleChangeEmail} value={email} required />
            {errors.email && <span className='form__error_validation_register'>{errors.email}</span>}   
          
          </li>
          <li className="form__item">
            <label htmlFor="password" >Пароль</label>
            <input className="form__input" type="password" placeholder="пароль" minLength={3} maxLength={14} name="password" onChange={handleChangePassword}
              value={password} required />
                {errors.password && <span className='form__error_validation_register'>{errors.password}</span>}
              
          </li>
          <div className='form__button-block'>
            {message && <span className='form__error_register'>{message}</span>}
            <button className="form__button" type='submit'>Войти</button>
            <p className="form__text">Ещё не зарегистрированы?<Link className='form__text_link' to='/signup'>Регистрация</Link> </p>
          </div>
        </form >
      </section>
    </main>
  )
}

export default Login;