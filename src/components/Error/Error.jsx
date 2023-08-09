import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <main className='error'>
      <div className='error__info'>
        <h1 className='error__info_number'>404</h1>
        <p className='error__info_text'>Страница не найдена</p>
      </div>
      <Link className='error__info_link' to="/">Назад</Link>
    </main>
  )
}

export default Error;