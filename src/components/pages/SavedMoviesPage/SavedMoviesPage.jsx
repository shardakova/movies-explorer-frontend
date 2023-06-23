import '../MoviesPage/MoviesPage.sass';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import SearchForm from '../../elements/SearchForm/SearchForm';
import Movie from '../../elements/Movie/Movie';
import movies from '../../../vendor/beatfilm-movies.json';
import Button from '../../elements/Button/Button';

function SavedMoviesPage () {
  return (
    <MainLayout>
      <div className="movies-page">
        <div className="movies-page__search-form">
          <SearchForm />
        </div>
        <div className="movies-page__movies">
          {movies.slice(0, 10).map(movie => (
            <Movie
              key={movie.id}
              title={movie.nameRU}
              cover={`https://api.nomoreparties.co/${movie.image.url}`}
              duration={movie.duration}
              trailerLink={movie.trailerLink}
              canBeDeleted={true}
              onDelete={() => {}}
            />)
          )}
        </div>
        <div className="movies-page__buttons">
          <Button
            className="movies-page__button-more"
            ariaLabel="Загрузить больше фильмов"
            onClick={() => {}}>
            Ещё
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default SavedMoviesPage;
