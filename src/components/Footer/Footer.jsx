import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bottom">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__info">
        <p className="footer__year">© 2023</p>
        <ul className="footer__list">
          <li className='footer__item'>
            <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className='footer__item'>
            <a className="footer__link" href="https://github.com/Olgaukropova" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;