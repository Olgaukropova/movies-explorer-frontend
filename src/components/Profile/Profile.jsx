import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';


function Profile({ onUpdateUser, signOut }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    handleEmailChange,
    setValues,
    setValid
  } = useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [ currentUser, setValues ]);

  React.useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setValid(false);
    }
  }, [ values ]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }


  return (
    <>
      <Header/>
      <main>
        <section className="profile__container">
          <h1 className="profile__title">Привет, {currentUser.name}</h1>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <div className="profile__info">
              <p className="profile__info-value">Имя</p>
              <input className={`profile__info-input ${errors.name && 'profile__info-input_type_error'}`}
                     type="text"
                     name={'name'}
                     placeholder={currentUser.name}
                     required
                     minLength="2"
                     maxLength="30"
                     value={values.name ?? ''}
                     onChange={handleChange}
              />
            </div>
            <p className="profile__validation">{errors.name}</p>
            <div className="profile__line"></div>
            <div className="profile__info">
              <p className="profile__info-value">E-mail</p>
              <input className={`profile__info-input ${errors.email && 'profile__info-input_type_error'}`}
                     type="email"
                     name={'email'}
                     placeholder={currentUser.email}
                     required onChange={handleEmailChange}
                     value={values.email ?? ''}
              />
            </div>
            <p className="profile__validation">{errors.email}</p>
            <div className="profile__button">
              <button className="profile__button-submit profile__button-edit"
                      type="submit"
                      disabled={!isValid}
              >
                Редактировать
              </button>
              <Link className="profile__button-submit profile__button-logout"
                    to="/"
                    onClick={signOut}
              >
                Выйти из аккаунта
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
