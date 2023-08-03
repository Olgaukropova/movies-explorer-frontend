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
        <div className="footer__socials">
          <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/Olgaukropova">Github</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;