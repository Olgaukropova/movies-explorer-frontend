import React from 'react';
import "./Profile.css";
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header
        text_register='Регистрация'
        text_login="Войти"
        pass='/signin'
        text_profile=''
      />

      <div className="profile__container">
       
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className='profile__form'>
        <div className='profile__info'>
          <input className='profile__info-input' type="text" placeholder='Имя'/>
          <p className='profile__info-value'>Виталий</p>
        </div>
        <div className='profile__line'></div>

        <div className='profile__info'>
         <input className='profile__info-input' type="text" placeholder='E-mail'/>
          <p className='profile__info-value'>pochta@yandex.ru</p>
        </div>
        <div className='profile__button'>
        <button className="profile__button-submit profile__button-edit" type="submit" >Редактировать</button>
        <button className="profile__button-submit profile__button-logout" type="submit" >Выйти из аккаунта</button>
        </div>
        </form>

      </div>

    </>
  )
};

export default Profile;