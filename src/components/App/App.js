import './App.css';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import { CurrentUserContext } from '../../src/context/CurrentUserContext.js';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';

function App() {
  return (
    // <CurrentUserContext.Provider >
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
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
