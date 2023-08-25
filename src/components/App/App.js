import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
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
import { LOCAL_STORAGE, NAVIGATOR, POPUP_MESSAGES, SCREEN } from '../../utils/vars';
import { ScreenTypeContext } from '../../context/ScreenTypeContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [ movies, setMovies ] = React.useState([]);
  const [ isLoading, setIsLoading ] = React.useState(false);
  const [ loggedIn, setLoggedIn ] = React.useState(LOCAL_STORAGE.JWT in localStorage);
  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ savedMovies, setSavedMovies ] = React.useState([]);
  const [ infoPopup, setInfoPopup ] = React.useState({
    isOpened: false,
    isError: false,
    message: '',
  });
  const [ screenType, setScreenType ] = React.useState(SCREEN.desktop.type);
  const screenTypeDebounce = React.useRef(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleChangeScreenType = () => {
      clearTimeout(screenTypeDebounce.current);
      screenTypeDebounce.current = setTimeout(() => {
        if (window.innerWidth > SCREEN.tablet.width) {
          setScreenType(SCREEN.desktop.type);
        } else if (window.innerWidth > SCREEN.mobile.width) {
          setScreenType(SCREEN.tablet.type);
        } else {
          setScreenType(SCREEN.mobile.type);
        }
      }, 100);
    };

    handleChangeScreenType();

    window.addEventListener('resize', handleChangeScreenType);

    return () => {
      clearTimeout(screenTypeDebounce.current);
      window.removeEventListener('resize', handleChangeScreenType);
    };

  }, [ screenType ]);

  const handleClosePopup = () => {
    setInfoPopup((popup) => ({ ...popup, isError: false, isOpened: false }));
  };

  const handleErrorViaPopup = (message) => {
    setInfoPopup({
      message: message,
      isError: true,
      isOpened: true,
    });
  };

  const handleSuccessViaPopup = (message) => {
    setInfoPopup({
      message: message,
      isError: false,
      isOpened: true,
    });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    mainApi
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem(LOCAL_STORAGE.JWT, res.data['jwt']);
        setLoggedIn(true);
        navigate(NAVIGATOR.MOVIES);
      })
      .catch((err) => {
        handleErrorViaPopup(err);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        navigate(NAVIGATOR.MOVIES, { replace: true });
        handleSuccessViaPopup(POPUP_MESSAGES.SUCCESS_REGISTRATION);
      })
      .catch((error) => {
        console.error(error);
        // Обработка ошибки регистрации
        handleErrorViaPopup(error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUpdateUser = (data) => {
    setIsLoading(true);
    mainApi.updateUser(data)
      .then((newUser) => {
        setCurrentUser(newUser);
        handleSuccessViaPopup(POPUP_MESSAGES.SUCCESS_PROFILE_UPDATE);
      })
      .catch((err) => {
        console.error(err);
        handleErrorViaPopup(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSaveMovies = (movie) => {
    mainApi.savedMovies(movie)
      .then((m) => setSavedMovies([ ...savedMovies, m ]))
      .catch(console.error);
  };

  const handleDelete = (id) => {
    mainApi.deleteMovies(id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => item._id !== id));
      })
      .catch(console.error);
  };

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([ mainApi.getInfoUser(), api.getMovies(), mainApi.getSavedMovies() ])
        .then(([ userData, moviesData, savedMoviesData ]) => {
          localStorage.setItem('user', JSON.stringify(userData.user));
          setCurrentUser(userData.user);
          setMovies(moviesData);
          setSavedMovies(savedMoviesData);
        })
        .catch((err) => {
          console.error(err);
          setLoggedIn(false);
          setCurrentUser({});
          navigate(NAVIGATOR.MAIN);
        })
        .finally(() => setIsLoading(false));
    }
  }, [ loggedIn ]);

  const handleSignOut = () => {
    mainApi.signout()
      .then(() => {
        setLoggedIn(false);
        navigate(NAVIGATOR.MAIN, { replace: true });
        localStorage.clear();
      })
      .catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ScreenTypeContext.Provider value={screenType}>
        <div className="App">
          <InfoTooltip isOpen={infoPopup.isOpened} onClose={handleClosePopup} infoPopup={infoPopup}/>
          <Routes>
            <Route path={NAVIGATOR.MAIN}
                   element={<Main loggedIn={loggedIn}/>}
            />
            {loggedIn && <Route path={NAVIGATOR.MOVIES} element={
              <ProtectedRouteElement element={Movies}
                                     movies={movies}
                                     savedMovies={savedMovies}
                                     isLoading={isLoading}
                                     loggedIn={loggedIn}
                                     handleError={handleErrorViaPopup}
                                     onSaved={handleSaveMovies}
              />}
            />}
            {loggedIn && <Route path={NAVIGATOR.SAVED_MOVIES} element={
              <ProtectedRouteElement element={SavedMovies}
                                     movies={savedMovies}
                                     savedMovies={savedMovies}
                                     isLoading={isLoading}
                                     loggedIn={loggedIn}
                                     handleError={handleErrorViaPopup}
                                     onDelete={handleDelete}
              />}
            />}
            {loggedIn && <Route path={NAVIGATOR.PROFILE} element={
              <ProtectedRouteElement element={Profile}
                                     onUpdateUser={handleUpdateUser}
                                     loggedIn={loggedIn}
                                     isLoading={isLoading}
                                     signOut={handleSignOut}
              />}
            />}
            <Route path={NAVIGATOR.SIGNUP}
                   element={<Register onRegister={handleRegister} isLoading={isLoading} loggedIn={loggedIn}/>}
            />
            <Route path={NAVIGATOR.SIGNIN}
                   element={<Login onLogin={handleLogin} isLoading={isLoading} loggedIn={loggedIn}/>}
            />
            <Route path={NAVIGATOR.ANY} element={<Error/>}/>
          </Routes>
        </div>
      </ScreenTypeContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
