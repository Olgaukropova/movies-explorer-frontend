import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {

  const isActive = (match) => {
    if (match.isActive) {
      return 'navigation__movies active navigation__movies_active';
    } else {
      return 'navigation__movies';
    }
  };

  return (
    <section className="navigation">
      <nav>
        <NavLink
          className={isActive} to="/movies"
        >Фильмы</NavLink>
        <NavLink className={isActive} to="/saved-movies"
        >Сохранённые фильмы</NavLink>
      </nav>
    </section>
  );
}

export default Navigation;

