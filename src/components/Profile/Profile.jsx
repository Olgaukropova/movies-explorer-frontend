import React from 'react';
import "./Profile.css";
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';


function Profile({ onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');


  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      // about: email,
    });
  }

  return (
    <>
      <Header />
      <main>
        <section className="profile__container">
          <h1 className="profile__title">Привет,{currentUser.name}</h1>
          <form className='profile__form' onSubmit={handleSubmit}>
            <div className='profile__info'>
              <p className='profile__info-value'>Имя</p>
              <input className='profile__info-input' type="text" placeholder={currentUser.name} required minLength='2' maxLength='15' value={name} onChange={handleNameChange} />
            </div>
            <div className='profile__line'></div>
            <div className='profile__info'>
              <p className='profile__info-value'>E-mail</p>
              <input className='profile__info-input' type="email" placeholder={currentUser.email} required onChange={handleEmailChange} value={email} />
            </div>
            <div className='profile__button'>
              <button className="profile__button-submit profile__button-edit" type="submit" >Редактировать</button>
              <Link className="profile__button-submit profile__button-logout" to="/" >Выйти из аккаунта</Link>
            </div>
            <button className="profile__button-saved" type="submit" >Сохранить</button>
            <div className='profile__button-error'>
              <p className='profile__button-error_text'>При обновлении профиля произошла ошибка.</p>
              <button className="profile__button-error_saved" type="submit" >Сохранить</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
};

export default Profile;