import React from 'react';
import "./Techs.css";


function Techs() {
  return (

    <section className="techs" id='tech'>
      <div className="title">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <h3 className="techs__header">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__helpers">
        <li className="techs__helpers-element">HTML</li>
        <li className="techs__helpers-element">CSS</li>
        <li className="techs__helpers-element">JS</li>
        <li className="techs__helpers-element">React</li>
        <li className="techs__helpers-element">Git</li>
        <li className="techs__helpers-element">Express.js</li>
        <li className="techs__helpers-element">mongoDB</li>
      </ul>
    </section>
  )

};

export default Techs;
