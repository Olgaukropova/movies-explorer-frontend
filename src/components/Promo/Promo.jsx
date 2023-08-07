import React from 'react';
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
      <nav>
        <ul className="promo__navigation">
          <li className='promo__navigation_item'>
            <a href="#aboutProject">
              <button className="promo__navigation_button promo_aboutProject" type='button'>О проекте</button>
            </a>
          </li>
          <li className='promo__navigation_item'>
            <a href="#tech">
              <button className="promo__navigation_button promo__techs" type='button'>Технологии</button>
            </a>
          </li>
          <li className='promo__navigation_item'>
            <a href="#aboutMe">
              <button className="promo__navigation_button promo_aboutme" type='button'>Студент</button>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default Promo;