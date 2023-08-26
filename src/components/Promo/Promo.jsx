import React from 'react';
import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
      <nav>
        <ul className="promo__navigation">
          <li className="promo__navigation_item">
            <Link to="#aboutProject" reloadDocument>
              <button className="promo__navigation_button promo_aboutProject" type="button">О проекте</button>
            </Link>
          </li>
          <li className="promo__navigation_item">
            <Link to="#tech" reloadDocument>
              <button className="promo__navigation_button promo__techs" type="button">Технологии</button>
            </Link>
          </li>
          <li className="promo__navigation_item">
            <Link to="#aboutMe" reloadDocument>
              <button className="promo__navigation_button promo_aboutme" type="button">Студент</button>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Promo;
