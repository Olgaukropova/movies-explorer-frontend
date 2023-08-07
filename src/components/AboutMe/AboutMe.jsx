import React from 'react';
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg"

function AboutMe() {
  return (
    <section className="aboutme" id='aboutMe'>
      <div className="title">
        <h2 className="aboutme__title">Студент</h2>
      </div>
      <div className="aboutme__content">
        <img className="aboutme__avatar" src={avatar} alt="фото фронтенд-разработчика данного приложения" />
        <div className="aboutme__info">
          <p className="aboutme__info-name" >Ольга</p>
          <h3 className="aboutme__info-job">Фронтенд-разработчик, 34 года</h3>
          <p className="aboutme__info-text" >Я живу в Рязани, закончила факультет экономики РГАТУ, работаю по специальности. Во время декретнего отпуска захотелось "прокачать мозг", так я и познакомилась с HTML. А дальше были ролики на Youtube, курсы, "гугление" и вот уже я хочу сменить професиию...
          </p>
          <a className="aboutme__info-link" href="https://github.com/Olgaukropova" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;