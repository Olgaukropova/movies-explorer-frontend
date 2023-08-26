import React from 'react';
import './SwitchButton.css';
import icon from '../../images/user-user.svg';
import { Link } from 'react-router-dom';

function SwitchButton({ onBurgerMenu }) {
  return (
    <>
      <div className="button">
        <Link className="button__block" to="/profile">
          <p className="button__text">Аккаунт</p>
          <div className="button__icon">
            <img className="button__img" src={icon} alt="иконка юзер"/>
          </div>
        </Link>
      </div>
      <button className="button-lines"
              type="button"
              onClick={onBurgerMenu}
      />
    </>
  );
}

export default SwitchButton;
