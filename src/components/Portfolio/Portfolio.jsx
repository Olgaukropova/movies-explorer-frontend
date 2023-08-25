import React from 'react';
import './Portfolio.css';


function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a href="https://github.com/Olgaukropova/how-to-learn"
             className="portfolio__link-element"
             target="_blank"
             rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__link-element"
             href="https://github.com/Olgaukropova/russian-travel"
             target="_blank"
             rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__link-element"
             href="https://github.com/Olgaukropova/react-mesto-api-full-gha"
             target="_blank"
             rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
