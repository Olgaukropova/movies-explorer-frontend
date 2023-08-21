import React from 'react';
import "./SavedMovies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ isLoading, savedMovies, onDelete }) {

  const [errorMessage, setErrorMessage] = React.useState(''); 

// console.log(savedMovies)
  return (
    <>
      <Header />
      <main>
        <SearchForm
          // onSearchMovies={searchMovies}
          setErrorMessage={setErrorMessage}
        />
        <span className="movies__error">{errorMessage}</span>
        <MoviesCardList
          isLoading={isLoading}
          movies={savedMovies}
          onDelete={onDelete}
        />
        <div className='empty'></div>
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;