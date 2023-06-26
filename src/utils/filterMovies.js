function filterMovies (movies, filter) {
  if (!movies || (movies && !Array.isArray(movies))) {
    return [];
  }

  let filteredMovies = movies;
  if (!filter.isShortFilmActive) {
    filteredMovies = filteredMovies.filter(movie => movie.duration >= 40);
  }
  if (filter.value) {
    const searchValue = filter.value.toLowerCase();
    filteredMovies = filteredMovies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(searchValue) || movie.nameEN.toLowerCase().includes(searchValue);
    });
  }

  return filteredMovies;
}

export default filterMovies;
