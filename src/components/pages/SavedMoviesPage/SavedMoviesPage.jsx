import '../MoviesPage/MoviesPage.sass';
import { useMemo, useState } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import SearchForm from '../../elements/SearchForm/SearchForm';
import Movie from '../../elements/Movie/Movie';
import Button from '../../elements/Button/Button';
import { useGetMoviesQuery } from '../../../services/moviesApi';
import Loader from '../../elements/Loader/Loader';
import filterMovies from '../../../utils/filterMovies';
import useShowMoreMoviesCount from '../../hooks/useShowMoreMoviesCount';

function SavedMoviesPage () {
  const {
    data: movies,
    isLoading: isMoviesLoading,
    isError: isMoviesError,
    refetch: refetchMovies
  } = useGetMoviesQuery();
  const moreMoviesCount = useShowMoreMoviesCount();
  const [moviesPageNumber, setMoviesPageNumber] = useState(4);
  const [search, setSearch] = useState({});

  const isMoviesReady = (
    !isMoviesLoading &&
    !isMoviesError &&
    search.isReady
  );

  const filteredMovies = useMemo(() => {
    if (!isMoviesReady) {
      return [];
    }
    return filterMovies(movies, search.fields);
  }, [movies, search, isMoviesReady]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const reloadMovies = () => {
    refetchMovies();
  };

  let moviesBlock = (
    <div className="movies-page__loader">
      <Loader size="small" />
    </div>
  );
  if (isMoviesReady) {
    moviesBlock = (
      <div className="movies-page__movies">
        {
          filteredMovies?.length
            ? filteredMovies?.slice(0, moreMoviesCount * moviesPageNumber)?.map(movie => (
              <Movie
                key={movie._id}
                movie={movie}
                canBeDeleted={true}
              />)
            )
            : 'Ничего не найдено'
        }
      </div>
    );
  }
  if (isMoviesError) {
    moviesBlock = (
      <div className="movies-page__movies">
        <span className="text text_color_danger">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и <a href="#" className="link link_color_primary" onClick={event => { event.preventDefault(); reloadMovies(); }}>попробуйте ещё раз</a>
        </span>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="movies-page">
        <div className="movies-page__search-form">
          <SearchForm
            onSearch={handleSearch}
          />
        </div>
        {moviesBlock}
        {
          (moreMoviesCount * moviesPageNumber < filteredMovies?.length)
            ? (
                <div className="movies-page__buttons">
                  <Button
                    className="movies-page__button-more"
                    ariaLabel="Загрузить больше фильмов"
                    onClick={() => {
                      setMoviesPageNumber(moviesPageNumber + 1);
                    }}
                  >
                    Ещё
                  </Button>
                </div>
              )
            : ''
        }
      </div>
    </MainLayout>
  );
}

export default SavedMoviesPage;
