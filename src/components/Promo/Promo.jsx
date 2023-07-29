import React from 'react';
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
      <div className="promo__navigation">
        <a href="#aboutProject">
          <button className="promo__navigation_button promo_aboutProject">О проекте</button>
        </a>
        <a href="#tech">
          <button className="promo__navigation_button promo__techs">Технологии</button>
        </a>
        <a href="#aboutMe">
          <button className="promo__navigation_button promo_aboutMe">Студент</button>
        </a>
      </div>
    </section>
  )
};

export default Promo;