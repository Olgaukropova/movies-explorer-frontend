import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className='error'>
      <div className='error__info'>
        <p className='error__info_numder'>404</p>
        <p className='error__info_text'>Страница не найдена</p>
      </div>
      <Link className='error__info_link'>Назад</Link>

    </section>
  )
}

export default Error;