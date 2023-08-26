import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutproject" id="aboutProject">
      <div className="title">
        <h2 className="aboutproject__title">О проекте</h2>
      </div>
      <div className="aboutproject__list">
        <h3 className="aboutproject__list_header">Дипломный проект включал 5 этапов</h3>
        <h3 className="aboutproject__list_header aboutproject__list_header-order">На выполнение диплома ушло 5
          недель</h3>
        <p className="aboutproject__list_description ">Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.</p>
        <p className="aboutproject__list_description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="aboutproject__list_tasks">
        <p className="aboutproject__list_tasks-time aboutproject__list_tasks-time_type_One">1 неделя</p>
        <p className="aboutproject__list_tasks-time">4 недели</p>
        <p className="aboutproject__list_tasks-step">Back-end</p>
        <p className="aboutproject__list_tasks-step">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
