import React, { useContext, useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { ScreenTypeContext } from '../../context/ScreenTypeContext';
import { NAVIGATOR, PAGINATION } from '../../utils/vars';

function MoviesCardList({ movies, savedMovies, isLoading, isSearching, page, onChangePage, onSaved, onDelete }) {
  const { pathname } = useLocation();
  const screenType = useContext(ScreenTypeContext);
  const [ toSlice, setToSlice ] = useState(12);
  const [ showButton, setShowButton ] = useState(false);

  useEffect(() => {
    movies.length > toSlice
      ? setShowButton(true)
      : setShowButton(false);

    setToSlice(PAGINATION[screenType].firstRender + PAGINATION[screenType].more * page);
  }, [ movies, toSlice, page, screenType ]);

  const isLiked = (m) => {
    return savedMovies.reduce((result, movie) => {
      if (m.id === Number(movie.movieId)) {
        m._id = movie._id;
        return true;
      }
      return result;
    }, false);
  };

  const renderMovies = () => {
    if (movies.length > 0) {
      if (pathname === NAVIGATOR.MOVIES) {
        return movies.slice(0, toSlice).map((movie) =>
          <MoviesCard key={movie.id} movie={movie} onSaved={onSaved} isLiked={isLiked(movie)} onDelete={onDelete}/>);
      } else {
        return movies.map((movie) => <MoviesCard key={movie._id} movie={movie} onDelete={onDelete}/>);
      }
    }
  };

  return (
    <section className="movies">
      {(isLoading || isSearching) ? (
        <Preloader/>
      ) : (
        <>
          {renderMovies()}
          {showButton && <button className="list__button"
                                 type="button"
                                 onClick={onChangePage}
          >
            Ещё
          </button>}
        </>
      )
      }
    </section>
  );
}

export default MoviesCardList;
