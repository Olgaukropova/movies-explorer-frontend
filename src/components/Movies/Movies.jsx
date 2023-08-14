import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies({ movies, isLoading }) {
  const [search, setSearch] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isShortMovies, setShortMovies] = React.useState(false);

  function searchMovies(query) {
    setErrorMessage('');
    const results = movies.filter(movie => movie.nameRU.includes(query));

    if (results.length === 0) {
      setErrorMessage('Ничего не найдено')
    }

    setSearch(results);
  };

  function updateIsShortMovie(value) {
    setShortMovies(value)
  };

  return (
    <section className='movies'>
      <Header />
      <main>
        <SearchForm
          onSearchMovies={searchMovies}
          setErrorMessage={setErrorMessage}
          updateIsShortMovie={updateIsShortMovie}

        />
        <span className="movies__error">{errorMessage}</span>

        <MoviesCardList
          isLoading={isLoading}
          movies={search}
          isShortMovies={isShortMovies} />
      </main>
      <Footer />
    </section>
  )
};

export default Movies;
