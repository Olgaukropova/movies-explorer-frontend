import React from 'react';
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';


function MoviesCard({ movie, onSaved, onDelete }) {
  const location = useLocation();
  const pathname = location.pathname;

const [isLike, setIsLike] = React.useState(movie.isLike);

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours}ч ${minutes}мин`;
  }

  function onLike(movie) {
    console.log('onLike movie:', movie);
    setIsLike(!isLike);
        onSaved(movie, !isLike);
     console.log('!isLike:', !isLike);
    movie.isLike = !movie.isLike;
    console.log(movie)
  }

  function onDel(movie) {
    setIsLike(!isLike);
    movie.isLike = !movie.isLike;
    onDelete(movie);
  }

  return (
    <section className='movie'>
      <div className='movie__info'>
        <div>
          <h2 className='movie__info-name'>{movie.nameRU}</h2>
          <p className='movie__info-time'>{formatDuration(movie.duration)}</p>
        </div>
        {(pathname === '/movies') ? (
          <button className={isLike ? 'buttonHeartSaved_active' : 'buttonHeartSaved'} type="button" onClick={() => onLike(movie)} ></button>
        ) : (
          <button className='buttonDelete' type="button" onClick={() => onDel(movie)} ></button>
        )}
      </div>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className='movie__img' src={pathname === '/saved-movies' ? `${movie.image}` : `https://api.nomoreparties.co/${movie.image.url}`} alt={`заставка: ${movie.nameRU}`} />
      </a>
    </section>
  )
};

export default MoviesCard;
