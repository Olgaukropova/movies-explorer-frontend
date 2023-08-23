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
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);


  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    mainApi
      .authorize(email, password)
      .then((data) => {
        if (data.data.jwt) {
          localStorage.setItem('jwt', data.data.jwt);
          setLoggedIn(true);
          localStorage.setItem('email', email);
          setCurrentUser(data.data);
          navigate('/movies');
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

 

  const handleUpdateUser = (data) => {
    mainApi.updateUser(data)
      .then((newUser) => {
        setCurrentUser(newUser);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleSaveMovies = (movie, isLike) => {
    const jwt = localStorage.getItem('jwt');
    mainApi.savedMovies(movie, jwt)
      .then((data) => {
        console.log(isLike)
        const updatedMovies = savedMovies.map((m) =>
          m.id === movie.id ? { ...m, isSaved: true, isLike: isLike } : m
        );
        setSavedMovies(updatedMovies);
        // setSavedMovies(data);
        getSavedMovies(jwt,);
      })
      .catch((err) => {
        console.error(err);
      }
      )
  }

  const getSavedMovies = (jwt, isLike) => {
    mainApi.getSavedMovies(jwt, isLike)
      .then((data) => {
        const filteredMoviesData = data.filter((movieItem) => movieItem.userId === jwt.userId);
        console.log("filteredMoviesData:", filteredMoviesData);
        setSavedMovies(filteredMoviesData);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleDelete = (movie) => {
    // console.log('movie:', movie)
    // console.log('movie.id:', movie._id)

    mainApi.deleteMovies(movie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => item._id !== movie._id));
      })
      .catch((err) => {
        console.error(err);
      })
  }

  
  React.useEffect(() => {
    //проверка наличия токена
    const jwt = localStorage.getItem('jwt');
    mainApi.getContent(jwt)
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);

        console.error(err);
      });

    setIsLoading(true);
    Promise.all([mainApi.getInfoUser(), api.getMovies()])
      .then(([userData, moviesData]) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setCurrentUser(userData.user);
        setMovies(moviesData);
        setIsLoading(false);

      })
  }, []);

  const handleSignOut = () => {
    mainApi.signout()
      .then(() => {
        setLoggedIn(false);
        navigate('/', { replace: true });
        localStorage.removeItem('jwt');
        localStorage.removeItem('searchQuery');
        localStorage.removeItem('isShortMovie');
        localStorage.removeItem('searchResults');
      })
      .catch(console.error);
  };
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          {loggedIn && <Route path="/movies" element={<ProtectedRouteElement element={Movies}
            movies={movies}
            isLoading={isLoading}
            loggedIn={loggedIn}
            onSaved={handleSaveMovies}
          />} />}
          {loggedIn && <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies}
            movies={movies}
            isLoading={isLoading}
            loggedIn={loggedIn}
            onDelete={handleDelete}
            getSavedMovies={getSavedMovies}
            savedMovies={savedMovies}
          />} />}
          {loggedIn && <Route path="/profile" element={<ProtectedRouteElement element={Profile}
            onUpdateUser={handleUpdateUser}
            loggedIn={loggedIn}
            signOut={handleSignOut} />} />}
          <Route path="/signup" element={<Register onRegister={handleRegister} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;