import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isLoading }) {
  const location = useLocation();
  const pathname = location.pathname;

  const [openedMovies, setOpenedMovies] = React.useState(movies.slice(0, 7));
  // console.log(openedMovies, 'openedMovies');
  const [showMore, setShowMore] = React.useState(false);

  function handleShowMore() {
    setOpenedMovies(movies.slice(0, openedMovies.length + 2));
  };

  React.useEffect(() => {
    setOpenedMovies(movies.slice(0, 7));
    if (movies.length > 7 && pathname === '/movies') {
      setShowMore(true)
    } else {
      setShowMore(false)
    }
  }, [movies, pathname]);

  return (
    <section className='movies'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {openedMovies.map((movie) =>
            <MoviesCard key={movie.id} movie={movie} />)}
          {showMore &&
            <button className="list__button" type='button' onClick={handleShowMore}>Ещё</button>}
        </>
      )
      }
    </section>
  )
};

export default MoviesCardList;