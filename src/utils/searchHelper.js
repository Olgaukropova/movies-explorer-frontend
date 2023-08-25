const formatString = (string) => {
  const regexForFormatString = /[!@#$%^&*(\-—_+=<>«»,.?|/]/g;

  return string.trim().toUpperCase().replace(regexForFormatString, '');
};

const filterMovies = (query, arr) => {
  if (query.isShort) {
    return arr
      .filter(m => m.duration <= 40)
      .filter(m => formatString(m.nameRU).includes(formatString(query.string)));
  } else {
    return arr.filter(m => formatString(m.nameRU).includes(formatString(query.string)));
  }
};

export { filterMovies };
