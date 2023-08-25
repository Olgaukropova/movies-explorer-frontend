const SCREEN = {
  desktop: {
    width: 1024,
    type: 'desktop',
    render: 12,
    more: 3,
  },
  tablet: {
    width: 800,
    type: 'tablet',
  },
  mobile: {
    width: 550,
    type: 'mobile',
  },
};

const POPUP_MESSAGES = {
  SUCCESS_REGISTRATION: 'Регистрация прошла успешно, добро пожаловать!',
  SUCCESS_PROFILE_UPDATE: 'Данные обновлены успешно!',
  EMPTY_INPUT_ERROR: 'Строка поиска не должна быть пустой...',
};

const LOCAL_STORAGE = {
  JWT: 'jwt',
  SEARCH: 'search',
  USER: 'user',
};

const NAVIGATOR = {
  MAIN: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  PROFILE: '/profile',
  ANY: '*',
};

const PAGINATION = {
  desktop: {
    firstRender: 7,
    more: 3,
  },
  tablet: {
    firstRender: 7,
    more: 2,
  },
  mobile: {
    firstRender: 5,
    more: 2,
  }
};

export {
  SCREEN,
  POPUP_MESSAGES,
  LOCAL_STORAGE,
  NAVIGATOR,
  PAGINATION,
};
