import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useMovieSearch } from '../../hooks/useMovieSearch';

function SavedMovies({ isLoading, onDelete, movies }) {
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
    isSavedMoviesPage: true,
    isFirstRequest: false,
    isBeatMoviesPage: false,
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
          movies={movies}
        />
        {!isLoading && !isSearching && <span className="movies__error">{message}</span>}
        <MoviesCardList
          isLoading={isLoading}
          isSearching={isSearching}
          onDelete={onDelete}
          movies={filteredMovies}
          page={page}
          onChangePage={handleChangePage}
        />
        <div className="empty"></div>
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;
