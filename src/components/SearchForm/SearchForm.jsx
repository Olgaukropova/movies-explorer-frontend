import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='searchform'>
      <form className='searchform__block'>
        <input className='searchform__input' placeholder="Фильм" type="text" required />
        <button className='searchform__button' type="submit">Найти</button>
        <FilterCheckbox />
      </form>
      <div className='searchform__line' />
    </section>
  )
};

export default SearchForm;