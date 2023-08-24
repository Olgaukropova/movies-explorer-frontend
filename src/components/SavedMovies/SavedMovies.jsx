// 

import React from 'react';
import "./SavedMovies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ isLoading, onDelete, getSavedMovies, savedMovies }) {
 
  const [errorMessage, setErrorMessage] = React.useState('');
  const [searchSaveMovies, setSearchSaveMovies] = React.useState([]);
  const [displayedMovies, setDisplayedMovies] = React.useState([]);
  const [isShortMovies, setShortMovies] = React.useState(false);


  function searchFilteredMovies(query) {
    setErrorMessage('');
    const results = savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
    if (results.length === 0) {
      setErrorMessage('Ничего не найдено');
    }
    setSearchSaveMovies(results);
  };
  
  function updateIsShortMovie(value) {
    setShortMovies(value)
  };

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    getSavedMovies(jwt);
  }, []);

  React.useEffect(() => {
    const displayedMovies = searchSaveMovies.length > 0 ? searchSaveMovies : savedMovies;
    setDisplayedMovies(displayedMovies);
  }, [searchSaveMovies, savedMovies]);

  return (
    <>
      <Header />
      <main>
        <SearchForm
          setErrorMessage={setErrorMessage}
          onSearchSavedMovies={searchFilteredMovies}
          updateIsShortMovie = {updateIsShortMovie}
        />
        <span className="movies__error">{errorMessage}</span>
        <MoviesCardList
          isLoading={isLoading}
          onDelete={onDelete}
          movies={displayedMovies}
          isShortMovies={isShortMovies}          
        />
        <div className='empty'></div>
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;