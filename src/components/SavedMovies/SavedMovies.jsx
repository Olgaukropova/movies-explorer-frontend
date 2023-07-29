import React from 'react';
import "./SavedMovies.css";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies() {
  return(
    <>
     <Header
        text_register='Регистрация'
        text_login="Войти"
        pass='/signin'
        text_profile=''
      />
      <SearchForm />
      <MoviesCardList />
      <div className='empty'></div>
      <Footer />
    </>
  )

};

export default SavedMovies;