import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';


import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isLoading, isShortMovies }) {
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
      //  console.log('isShortMovies in MoviesCardList useEffect:', isShortMovies);
      if (isShortMovies) {

        const filteredMovies = movies.filter(movie => movie.duration <= 40);
        // console.log(filteredMovies.map(movie => movie.duration), 'movie.duration');
        // console.log('sliceValue():', sliceValue());

        setOpenedMovies(filteredMovies.slice(0, sliceValue()));
        
        if (filteredMovies.length > 7 && pathname === '/movies') {
          setShowMore(true)
        } else {
          setShowMore(false)
        }
        // console.log('Открытые фильмы:', openedMovies);
        // console.log('Отфильтрованные короткометражные фильмы:', filteredMovies);
        // console.log('Показывать "Ещё":', showMore);
     
      } else {
       
        setOpenedMovies(movies.slice(0, sliceValue()));
        if (movies.length > 7 && pathname ==='/movies') {
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
            <MoviesCard key={movie.id} movie={movie} />)}
          {showMore && openedMovies.length < movies.length &&
            <button className="list__button" type='button' onClick={handleShowMore}>Ещё</button>}
        </>
      )
      }
    </section>
  )
};

export default MoviesCardList;