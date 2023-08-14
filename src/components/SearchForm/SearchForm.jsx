import React from 'react';
import './SearchForm.css';

function SearchForm({ onSearchMovies, setErrorMessage, updateIsShortMovie }) {
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [isShortMovies, setShortMovies] = React.useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
    setError('');
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError('Нужно ввести ключевое слово');
      setErrorMessage('');
    } else {
      setError('');
      onSearchMovies(name, isShortMovies);
     }
  }


  const handleCheckboxChange = (e) => {
    setShortMovies(e.target.checked);
    updateIsShortMovie(e.target.checked)
  }
  return (
    <section className='searchform'>
      <form className='searchform__block' onSubmit={handleSubmit} noValidate>
        <input className='searchform__input' placeholder="Фильм" type="text" required value={name} onChange={handleChange} />
        <button className='searchform__button' type="submit" >Найти</button>
        {error && <p className="searchform__error">{error}</p>}
        <section className="filtercheckbox">
          <input type="checkbox" id="toggle" className="filtercheckbox__input" checked={isShortMovies} onChange={handleCheckboxChange} />
          <label htmlFor="toggle" className="filtercheckbox__label"></label>
          <span className="filtercheckbox__text">Короткометражки</span>
        </section>
      </form>
      <div className='searchform__line' />
    </section>
  )
};

export default SearchForm;
