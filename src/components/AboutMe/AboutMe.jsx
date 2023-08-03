import React from 'react';
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg"

function AboutMe() {
  return (
    <section className="aboutMe" id='aboutMe'>
      <div className="title">
        <h2 className="aboutMe__title">Студент</h2>
      </div>
      <div className="aboutMe__content">
        <img className="aboutMe__avatar" src={avatar} alt="моё фото" />
        <div className="aboutMe__info">
          <p className="aboutMe__info-name" >Ольга</p>
          <h3 className="aboutMe__info-job">Фронтенд-разработчик, 34 года</h3>
          <p className="aboutMe__info-text" >Я живу в Рязани, закончила факультет экономики РГАТУ, работаю по специальности. Во время декретнего отпуска захотелось "прокачать мозг", так я и познакомилась с HTML. А дальше были ролики на Youtube, курсы, "гугление" и вот уже я хочу сменить професиию...
          </p>
          <a className="aboutMe__info-link" href="https://github.com/Olgaukropova" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;