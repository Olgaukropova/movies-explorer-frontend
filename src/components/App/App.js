import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
// import { CurrentUserContext } from '../../src/context/CurrentUserContext.js';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';
import { api } from '../../utils/MoviesApi';
import {mainApi} from '../../utils/MainApi';
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";



function App() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        setLoggedIn(true);
        // setEmailUser(email);
        // setCurrentUser(res.data);
        navigate('/movies', { replace: true });
      })

      .catch((err) => {
        // handleInfoTooltip();
        console.log('Что-то пошло не так! Попробуйте ещё раз');
        console.error(err);
      });
  };


  const handleRegister = ({ name, email, password }) => {
    mainApi
      .register(name, email, password)
      .then((data) => {
        // if (data.error) {
        //   console.log( 'Что-то пошло не так! Попробуйте ещё раз');
        // } else {
        //   console.log('tut');
        //   console.log('Вы успешно зарегистрировались!');
          navigate('/movies', { replace: true });
        // }
      })
      // .catch((err) => {
      //   console.log( 'Что-то пошло не так! Попробуйте ещё раз');
      //   console.error(err);
      // })
      // .finally();
  };

  React.useEffect(() => {
    setIsLoading(true);
    api.getMovies()
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
      })
  }, [])

  return (
    // <CurrentUserContext.Provider >
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies
          movies={movies}
          isLoading={isLoading} />} />
        <Route path="/saved-movies" element={<ProtectedRouteElement element ={<SavedMovies/>}
          movies={movies}
          isLoading={isLoading} 
          loggedIn ={loggedIn}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register onRegister={handleRegister}/>} />
        <Route path="/signin" element={<Login onLogin={handleLogin}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
