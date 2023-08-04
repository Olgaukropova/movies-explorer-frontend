import React from 'react';
import "./Movies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader'
function Movies({ text_register, text_login }) {
  return (
    <>
      <Header/>
      <SearchForm />
      <MoviesCardList />
      <Footer />
      {/* <Preloader/> */}
    </>
  )
};

export default Movies;