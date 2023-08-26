import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useMovieSearch } from '../../hooks/useMovieSearch';


function Movies({ movies, savedMovies, isLoading, onSaved, onDelete, handleError, reqLoadFilms, isFirstRequest }) {
  const {
    query,
    filteredMovies,
    message,
    isSearching,
    page,
    handleChangePage,
    handleChange,
    handleCheckboxChange,
    handleSearch
  } = useMovieSearch({
    movies,
    isBeatMoviesPage: true,
    handleError,
  });

  return (
    <>
      <Header/>
      <main>
        <SearchForm
          query={query}
          onSearchMovies={handleSearch}
          onChange={handleChange}
          onCheckboxChange={handleCheckboxChange}
          isSearching={isSearching}
          reqLoadFilms={reqLoadFilms}
          isFirstRequest={isFirstRequest}
          movies={movies}
        />
        {!isLoading && !isSearching && <span className="movies__error">{message}</span>}
        <MoviesCardList
          isLoading={isLoading}
          isSearching={isSearching}
          movies={filteredMovies}
          savedMovies={savedMovies}
          page={page}
          onChangePage={handleChangePage}
          onSaved={onSaved}
          onDelete={onDelete}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
