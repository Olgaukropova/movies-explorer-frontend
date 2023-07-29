import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (  
      <section className='searchForm'>
        <form action="" method="get" type="text" className='searchForm__block'>
          <input className='searchForm__input' placeholder="Фильм" type="search" required />
          <button className='searchForm__button' type="submit">Найти</button>
        </form>
        <FilterCheckbox />
        <div className='searchForm__line'/>
      </section>    
  )
};

export default SearchForm;