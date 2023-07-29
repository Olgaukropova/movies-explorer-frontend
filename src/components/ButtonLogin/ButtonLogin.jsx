import React from 'react';
import "./ButtonLogin.css";

import { Link } from 'react-router-dom';

function ButtonLogin() {
  return (

    <section className='links'>
      <Link to='/signup' className='link'>Регистрация</Link>
      <Link to='/signin' className='link__button'>
        <button className='link__button-login'>Войти</button>
      </Link>
    </section>
  )

};

export default ButtonLogin;