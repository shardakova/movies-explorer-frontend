import { MAX_SHORT_FILM_DURATION } from './constants';

function filterMovies (movies, filter) {
  if (!movies || (movies && !Array.isArray(movies))) {
    return [];
  }

  let filteredMovies = movies;
  if (!filter.isShortFilmActive) {
    filteredMovies = filteredMovies.filter(movie => movie.duration >= MAX_SHORT_FILM_DURATION);
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
