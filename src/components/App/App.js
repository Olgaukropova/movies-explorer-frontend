import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';
import { api } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';



function App() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  const navigate = useNavigate();

  //Функция для получения значения куки по имени
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim().split('=');
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  }

  const handleLogin = ({ email, password }) => {
    mainApi
      .authorize(email, password)
      .then((data) => {
            localStorage.setItem('jwt', data.data.jwt);
        setLoggedIn(true);
        localStorage.setItem('email', email);//+++
       

        // Проверка наличия токена перед вызовом getInfoUser()
        if (data.data.jwt) {
          mainApi.getInfoUser()
            .then((userData) => {
              localStorage.setItem('user', JSON.stringify(userData));
              setCurrentUser(userData);
              navigate('/movies');
            })
        } else {
          // Токен отсутствует, перенаправляем пользователя на страницу входа
          console.log('Необходима повторная авторизация');
          navigate('/signin');
          console.log('JWT not found in cookies');
        }
      })
      .catch((err) => {
        console.log('Что-то пошло не так! Попробуйте ещё раз');
        console.error(err);
      });
  };


  const handleRegister = ({ name, email, password }) => {
    mainApi
      .register(name, email, password)
      .then((data) => {
        handleLogin({ email, password });
        navigate('/movies', { replace: true });

      })
      .catch((error) => {
                console.error('Ошибка при регистрации:', error);
        // Обработка ошибки регистрации
      });
  };


  React.useEffect(() => {
    setIsLoading(true);
    Promise.all([mainApi.getInfoUser(), api.getMovies()])
      .then(([userData, moviesData]) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setCurrentUser(userData);
        setMovies(moviesData);
        setIsLoading(false);
      })
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<ProtectedRouteElement element={Movies}
            movies={movies}
            isLoading={isLoading}
            loggedIn={loggedIn} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies}
            movies={movies}
            isLoading={isLoading}
            loggedIn={loggedIn} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register onRegister={handleRegister} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin}  />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;