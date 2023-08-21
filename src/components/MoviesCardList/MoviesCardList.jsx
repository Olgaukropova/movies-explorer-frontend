import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';


import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isLoading, isShortMovies, onSaved, onDelete }) {
  const location = useLocation();
  const pathname = location.pathname;

  const [openedMovies, setOpenedMovies] = React.useState(movies.slice(0, sliceValue(pathname)));
  // console.log(openedMovies, 'openedMovies');
  const [showMore, setShowMore] = React.useState(false);

  function sliceValue(pathname) {
    if (pathname === '/movies') {
      return 7;
    } else if (pathname === '/saved-movies') {
      return 3;
    }
  }

  // console.log('isShortMovies in MoviesCardList:', isShortMovies);

  function handleShowMore() {
    setOpenedMovies(movies.slice(0, openedMovies.length + 2));
   
  };

  React.useEffect(() => {
    setOpenedMovies(movies.slice(0, sliceValue()));
    if (movies.length > 7 && pathname === '/movies') {
      setShowMore(true)
    } else {
      setShowMore(false)
    }
  }, [movies, pathname]);

  // Фильтрация фильмов
  React.useEffect(() => {
    if (isShortMovies) {      
      const filteredMovies = movies.filter(movie => movie.duration <= 40);
      setOpenedMovies(filteredMovies.slice(0, sliceValue()));
      if (filteredMovies.length > 7 && pathname === '/movies') {
        setShowMore(true)
      } else {
        setShowMore(false)
      }
    } else {
      setOpenedMovies(movies.slice(0, sliceValue()));
      if (movies.length > 7 && pathname === '/movies') {
        setShowMore(true)
      } else {
        setShowMore(false)
      }

    }
  }, [isShortMovies, movies, pathname]);

  return (
    <section className='movies'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {openedMovies.map((movie) =>
            <MoviesCard key={movie.id ? movie.id : movie._id} movie={movie} onSaved={onSaved} onDelete={onDelete}/>)}
          {showMore && openedMovies.length < movies.length &&
            <button className="list__button" type='button' onClick={handleShowMore}>Ещё</button>}
        </>
      )
      }
    </section>
  )
};

export default MoviesCardList;