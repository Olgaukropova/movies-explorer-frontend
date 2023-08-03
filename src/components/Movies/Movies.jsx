import React from 'react';
import "./Movies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ text_register, text_login }) {
  return (
    <>
      <Header
        text_register='Регистрация'
        text_login="Войти"
        pass='/signin'
        text_profile=''
      />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
};

export default Movies;