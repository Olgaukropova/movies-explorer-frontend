import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className='error'>
      <p className='error__numder'>404</p>
      <p className='error__text'>Страница не найдена</p>
     <Link className='error__link'>Назад</Link>
      
    </section>
  )
}

export default Error;