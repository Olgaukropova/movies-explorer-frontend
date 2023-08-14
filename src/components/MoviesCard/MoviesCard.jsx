import React from 'react';
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';


function MoviesCard({ movie }) {
  const location = useLocation();
  const pathname = location.pathname;

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    
    return `${hours}ч ${minutes}мин`;
  }
  

  return (
    <section className='movie'>
      <div className='movie__info'>
        <div>
          <h2 className='movie__info-name'>{movie.nameRU}</h2>
          <p className='movie__info-time'>{formatDuration(movie.duration)}</p>
        </div>
        {(pathname === '/movies') ? (
          <button className='buttonHeartSaved' type="button" ></button>
        ) : (
          <button className='buttonDelete' type="button" ></button>
        )}
      </div>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className='movie__img' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={`заставка: ${movie.nameRU}`} />
      </a>
    </section>
  )
};

export default MoviesCard;
