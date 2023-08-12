import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMovies }) {
  const [name, setName] = React.useState('');


  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchMovies(name);
  }
  return (
    <section className='searchform'>
      <form className='searchform__block' onSubmit={handleSubmit}>
        <input className='searchform__input' placeholder="Фильм" type="text" required value={name} onChange={handleChange} />
        <button className='searchform__button' type="submit" >Найти</button>
        <FilterCheckbox />
      </form>
      <div className='searchform__line' />
    </section>
  )
};

export default SearchForm;