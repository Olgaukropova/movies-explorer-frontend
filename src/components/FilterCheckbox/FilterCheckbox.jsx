import React from 'react';
import "./FilterCheckbox.css";


function FilterCheckbox() {
  return(
    <div className="filterCheckbox">
    <input type="checkbox" id="toggle" className="filterCheckbox__input"/>
      <label for="toggle" className="filterCheckbox__label"></label>
      <span className="filterCheckbox__text">Короткометражки</span>
  </div>
  )

};

export default FilterCheckbox;