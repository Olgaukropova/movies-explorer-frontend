// class MainApi {
//   constructor(config) {
//     this._baseUrl = config.baseUrl;
//     this._headers = config.headers;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   getSavedMovies() {
//     return fetch(`${this._baseUrl}/movies`, {
//       method: 'GET',
//             headers: this._headers,
//       'Content-Type': 'application/json'
//     })
//       .then(this._checkResponse);

//   }

//   savedMovies(data) {
//     return fetch(`${this._baseUrl}/movies`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: this._headers,
//       'Content-Type': 'application/json'
//     })
//       .then(this._checkResponse);
//   }

//   //Попап удаления карточки
//   deleteMovies(movieId) {
//     return fetch(`${this._baseUrl}/movies/${movieId}`, {
//       method: 'DELETE',
//       headers: this._headers
//     })
//       .then(this._checkResponse);
//   }



// }

// export const api = new MainApi({
//   baseUrl: 'https://api.olga.diploma.nomoredomains.xyz',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
// });
