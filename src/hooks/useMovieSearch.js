import React, { useEffect } from 'react';
import { LOCAL_STORAGE, POPUP_MESSAGES } from '../utils/vars';
import { filterMovies } from '../utils/searchHelper';

export const useMovieSearch = ({ movies, isBeatMoviesPage, isSavedMoviesPage, handleError }) => {
  const [ filteredMovies, setFilteredMovies ] = React.useState([]);
  const [ query, setQuery ] = React.useState({
    string: '',
    isShort: false,
    data: [],
  });
  const [ message, setMessage ] = React.useState('');
  const [ isSearching, setSearching ] = React.useState(false);
  const [ page, setPage ] = React.useState(0);

  useEffect(() => {
    // проверяем есть ли история поиска
    if (LOCAL_STORAGE.SEARCH in localStorage && isBeatMoviesPage) {
      const history = JSON.parse(localStorage.getItem(LOCAL_STORAGE.SEARCH));
      setQuery({ ...history });
      setFilteredMovies(history.data);
    }
    // при отсутствии истории поиска выводим сообщение
    if (!localStorage.getItem(LOCAL_STORAGE.SEARCH) && isBeatMoviesPage) {
      setMessage('↑ Воспользуйтесь поиском для просмотра фильмов. ↑');
    }
  }, [ isBeatMoviesPage ]);

  useEffect(() => {
    if (isSavedMoviesPage) {
      // сбрасываем все ошибки
      setMessage('');
      // получаем список фильмов в соотв. с квери-запросом
      const newFilteredMovies = filterMovies(query, movies);
      // записываем отфильтрованный массив
      setFilteredMovies(newFilteredMovies);

      // проверки массивов и вывод ошибок
      if (newFilteredMovies.length === 0) {
        setMessage('Ничего не найдено.');
      }
      if (movies.length === 0) {
        setMessage('Сохраненных фильмов пока нет :(');
      }
    }
  }, [ isSavedMoviesPage, movies, query ]);

  const handleChangePage = () => setPage(p => p + 1);

  const handleChange = (evt) => {
    setQuery((q) => ({ ...q, string: evt.target.value }));
  };

  const handleCheckboxChange = (evt) => {
    // обработка ошибки при пустом инпуте
    if (!query.string && isBeatMoviesPage) {
      return handleError(POPUP_MESSAGES.EMPTY_INPUT_ERROR);
    }
    // меняем стейт запроса
    setQuery((q) => ({ ...q, isShort: evt.target.checked }));

    handleSearch({ string: query.string, isShort: evt.target.checked });
  };

  const resetParams = () => {
    setMessage('');
    setPage(0);
  };

  const handleSearch = (query) => {
    if (!query.string && isBeatMoviesPage) {
      return handleError(POPUP_MESSAGES.EMPTY_INPUT_ERROR);
    }

    resetParams();

    setSearching(true);

    const filtered = filterMovies(query, movies);

    setTimeout(() => {
      if (filtered.length === 0) {
        setMessage('Ничего не найдено...');
      }

      setFilteredMovies(filtered);

      setSearching(false);
    }, 300);

    if (isBeatMoviesPage) {
      localStorage.setItem(LOCAL_STORAGE.SEARCH, JSON.stringify({
        string: query.string,
        isShort: query.isShort,
        data: filtered,
      }));
    }
  };

  return {
    filteredMovies,
    query,
    message,
    isSearching,
    page,
    handleChangePage,
    handleChange,
    handleCheckboxChange,
    handleSearch
  };
};
