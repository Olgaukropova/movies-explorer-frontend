import React from 'react';
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';


function MoviesCard({ name, time, film }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className='movie'>
      <div className='movie__info'>
        <div>
          <h2 className='movie__info-name'>{name}</h2>
          <p className='movie__info-time'>{time}</p>
        </div>
        {(pathname === '/movies') ? (
          <button className='buttonHeartSaved' type="button" ></button>
        ) : (
          <button className='buttonDelete' type="button" ></button>
        )}
      </div>
      <img className='movie__img' src={film} alt="заставка" />
    </section>
  )
};

export default MoviesCard;
