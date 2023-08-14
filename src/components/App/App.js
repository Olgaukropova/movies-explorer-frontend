import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
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



function App() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

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
        <Route path="/saved-movies" element={<SavedMovies
          movies={movies}
          isLoading={isLoading} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
