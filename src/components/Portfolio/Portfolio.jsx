import React from 'react';
import "./Portfolio.css";


function Portfolio() {
  return(
    <section className="portfolio">
        <h3  className="portfolio__title">Портфолио</h3>
        <div className="portfolio__links">
          <div className="portfolio__link">
            <a href="https://github.com/Olgaukropova/how-to-learn" className='portfolio__link-element'>Статичный сайт</a>
          </div>
          <div className="portfolio__link">
            <a className='portfolio__link-element' href="https://github.com/Olgaukropova/russian-travel">Адаптивный сайт</a>
          </div>
          <div className="portfolio__link">
            <a className='portfolio__link-element' href="https://mesto.olga.nomoreparties.sbs">Одностраничное приложение</a>
          </div>
        </div>
      </section>
  )
};

export default Portfolio;