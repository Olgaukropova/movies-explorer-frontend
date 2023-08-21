import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies({ movies, isLoading, onSaved }) {
  const [search, setSearch] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isShortMovies, setShortMovies] = React.useState(false);

 

  function searchMovies(query, isShortMovie) {
    setErrorMessage('');
    const results = movies.filter(movie => movie.nameRU.includes(query));

    if (results.length === 0) {
      setErrorMessage('Ничего не найдено')
    }

    setSearch(results);

    localStorage.setItem('searchQuery', query);
    localStorage.setItem('isShortMovie', isShortMovie);
    localStorage.setItem('searchResults', JSON.stringify(results));

    // console.log('Search query:', query);
    // console.log('Short movie state:', isShortMovies);
    console.log('Search results:', results);
  };

  function updateIsShortMovie(value) {
    setShortMovies(value)
  };

  React.useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    const isShortMovie = localStorage.getItem('isShortMovie');
    const searchResults = JSON.parse(localStorage.getItem('searchResults'));

    if (searchQuery && isShortMovie && searchResults) {
      setSearch(searchResults);
      setShortMovies(isShortMovie);
    }
  }, []);

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
          isShortMovies={isShortMovies}
          onSaved={onSaved} />
      </main>
      <Footer />
    </section>
  )
};

export default Movies;
