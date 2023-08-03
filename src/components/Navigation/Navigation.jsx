import React from 'react';
import "./Navigation.css";

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <section className='navigation'>
      <Link className='navigation__movies' to="/movies">Фильмы</Link>
      <Link className='navigation__saved' to="/saved-movies">Сохранённые фильмы</Link>
    </section>
  )
};

export default Navigation;