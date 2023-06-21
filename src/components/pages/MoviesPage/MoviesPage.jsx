import './MoviesPage.sass';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import SearchForm from '../../elements/SearchForm/SearchForm';
import Movie from '../../elements/Movie/Movie';
import movies from '../../../vendor/beatfilm-movies.json';

function MoviesPage () {
  return (
    <MainLayout>
      <div className="movies-page">
        <div className="movies-page__search-form">
          <SearchForm />
        </div>
        <div className="movies-page__movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              title={movie.nameRU}
              cover={`https://api.nomoreparties.co/${movie.image.url}`}
              duration={movie.duration}
              trailerLink={movie.trailerLink}
              canBeLiked={true}
              onLike={() => {}}
            />)
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default MoviesPage;
