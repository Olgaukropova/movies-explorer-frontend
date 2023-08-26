import React from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
import { NAVIGATOR } from '../../utils/vars';

function SearchForm({ query, onSearchMovies, onChange, onCheckboxChange, isSearching, reqLoadFilms, isFirstRequest, movies }) {
  const { pathname } = useLocation();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (isFirstRequest && pathname === NAVIGATOR.MOVIES) {
      const data = await reqLoadFilms();
      onSearchMovies(query, data);
    } else {
      onSearchMovies(query, movies);
    }
  };

  return (<section className="searchform">
    <form className="searchform__block" onSubmit={handleSubmit} noValidate>
      <input className="searchform__input"
             placeholder="Фильм"
             type="text"
             required
             value={query.string ?? ''}
             onChange={onChange}
      />
      <button className="searchform__button" type="submit" disabled={isSearching}>Найти</button>
      {/*{error && <p className="searchform__error">{error}</p>}*/}
      <section className="filtercheckbox">
        <input type="checkbox"
               id="toggle"
               className="filtercheckbox__input"
               checked={query.isShort}
               onChange={onCheckboxChange}
        />
        <label htmlFor="toggle" className="filtercheckbox__label"/>
        <span className="filtercheckbox__text">Короткометражки</span>
      </section>
    </form>
    <div className="searchform__line"/>
  </section>);
}

export default SearchForm;
