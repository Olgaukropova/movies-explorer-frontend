import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";
import logo from '../../logo.svg'

function Register({onRegister}) {
  const [name, setName] = React.useState({ name: '' });
  const [email, setEmail] = React.useState({ email: '' });
  const [password, setPassword] = React.useState({ password: '' });

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
    console.log('handleSubmit')
    console.log('email', email)
    console.log('password',password)
    e.preventDefault();

    onRegister({
      name,
      email,
      password
    });
  }

  return (
    <main>
      <section className='register'>
        <Link to="/" className='register__link' >
          <img src={logo} className="register__logo" alt='лoготип' />
        </Link>

        <form className="form" onSubmit={handleSubmit} >
          <h1 className="form__header_register">Добро пожаловать!</h1>
          <li className="form__item_register">
            <label htmlFor="name">Имя</label>
            <input className="form__input_register" type="text" placeholder="Виталий" name="name" minLength={3} maxLength={15} onChange={handleChangeName}/>
          </li>
          <li className="form__item_register">
            <label htmlFor="email">E-mail</label>
            <input className="form__input_register" type="email" placeholder="pochta@yandex.ru" name="email" onChange={handleChangeEmail}/>
          </li>
          <li className="form__item_register">
            <label htmlFor="password">Пароль</label>
            <input className="form__input_register" type="password" placeholder="пароль" minLength={3} maxLength={14} name="password"onChange={handleChangePassword}/>
          </li>
          <span className='form__error_register'>Что-то пошло не так...</span>
          <button className="form__button-register" type='submit'>Зарегистрироваться</button>
          <p className="form__text_register">Уже зарегистрированы? <Link className='form__text_link_register' to='/signin'>Войти</Link> </p>
        </form >
      </section>
    </main>
  )
}

export default Register;