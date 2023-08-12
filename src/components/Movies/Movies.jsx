import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import Preloader from '../Preloader/Preloader'
function Movies({movies, isLoading}) {
  const[search, setSearch] = React.useState([]);

  function searchMovies (query){
    const results = movies.filter(movie => movie.nameRU.includes(query));
    setSearch(results);
  };

  return (
    <>
      <Header />
      <main>
        <SearchForm 
        onSearchMovies ={searchMovies}
        />
        <MoviesCardList 
         
         isLoading={isLoading}
         movies={search}/>
      </main>
      <Footer />
      {/* <Preloader/> */}
    </>
  )
};

export default Movies;