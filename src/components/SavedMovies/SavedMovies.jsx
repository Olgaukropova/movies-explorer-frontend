import React from 'react';
import "./SavedMovies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ movies, isLoading }) {
  const [search, setSearch] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  function searchMovies(query) {
    setErrorMessage('');
    const results = movies.filter(movie => movie.nameRU.includes(query));

    if (results.length === 0) {
      setErrorMessage('Ничего не найдено')
    }

    setSearch(results);
  };

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSearchMovies={searchMovies}
          setErrorMessage={setErrorMessage} />
        <span className="movies__error">{errorMessage}</span>
        <MoviesCardList
          isLoading={isLoading}
          movies={search} />
        <div className='empty'></div>
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;