import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { NAVIGATOR } from '../../utils/vars';


function MoviesCard({ movie, onSaved, isLiked, onDelete }) {
  const { pathname } = useLocation();

  function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return hours > 0 ? `${hours}ч ${minutes}мин` : `${minutes}мин`;
  }

  function onLike(movie) {
    onSaved(movie);
  }

  function onDel(movie) {
    onDelete(movie._id);
  }

  function openTrailer(link) {
    window.open(link, '_blank');
  }

  return (
    <section className="movie">
      <div className="movie__info">
        <div>
          <h2 className="movie__info-name">{movie.nameRU}</h2>
          <p className="movie__info-time">{formatDuration(movie.duration)}</p>
        </div>
        {(pathname === NAVIGATOR.MOVIES) ? (
          <button className={isLiked ? 'buttonHeartSaved_active' : 'buttonHeartSaved'}
                  type="button"
                  onClick={() => isLiked ? onDel(movie) : onLike(movie)}/>
        ) : (
          <button className="buttonDelete" type="button" onClick={() => onDel(movie)}/>
        )}
      </div>
      <img className="movie__img"
           src={pathname === NAVIGATOR.SAVED_MOVIES ? `${movie.image}` : `https://api.nomoreparties.co/${movie.image.url}`}
           alt={`заставка: ${movie.nameRU}`}
           onClick={() => openTrailer(movie.trailerLink)}
      />
    </section>
  );
}

export default MoviesCard;
