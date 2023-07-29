import React from 'react';
import "./AboutProject.css";


function AboutProject() {
  return(
    <section className="aboutProject" id='aboutProject'>
        <div className="title">
          <h2 className="aboutProject__title">О проекте</h2>
        </div>
        <div className="aboutProject__list_description aboutProject__list">
          <h3 className="aboutProject__list_description-header">Дипломный проект включал 5 этапов</h3>
          <h3 className="aboutProject__list_description-header">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__list_description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="aboutProject__list_description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="aboutProject__list_tasks aboutProject__list">
          <p className="aboutProject__list_tasks-time aboutProject__list_tasks-time_type_One">1 неделя</p>
          <p className="aboutProject__list_tasks-time">4 недели</p>
          <p className="aboutProject__list_tasks-step">Back-end</p>
          <p className="aboutProject__list_tasks-step">Front-end</p>
        </div>
      </section>
  )
};

export default AboutProject;