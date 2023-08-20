class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
      credentials: 'include'
    })
      .then(this._checkResponse);

  };


  authorize = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
        // token
      })
    })
      .then(this._checkResponse)
  };

  //запрос данных о пользователе с сервера
  getInfoUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include'
    })
      .then(this._checkResponse);

  };

  getContent() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(this._checkResponse)
  };

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include'
    })
      .then(this._checkResponse);

  };



  savedMovies(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...this._headers,
        Authorization: `Bearer ${data.token}`,
      },
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  //Попап удаления карточки
  deleteMovies(movieId, token) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include'
    })
      .then(this._checkResponse);
  }
}



export const mainApi = new MainApi({
  baseUrl: 'https://api.olga.diploma.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json'
  },
});
