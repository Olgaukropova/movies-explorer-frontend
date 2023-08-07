import React from 'react';
import "./Profile.css";
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


function Profile() {
  return (
    <>
      <Header />
      <main>
        <section className="profile__container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className='profile__form'>
            <div className='profile__info'>
              <p className='profile__info-value'>Имя</p>
              <input className='profile__info-input' type="text" placeholder='Виталий' required minLength='2' maxLength='15' />
            </div>
            <div className='profile__line'></div>
            <div className='profile__info'>
              <p className='profile__info-value'>E-mail</p>
              <input className='profile__info-input' type="text" placeholder='pochta@yandex.ru' required />
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