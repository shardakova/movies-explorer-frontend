import './Movie.sass';
import Button from '../Button/Button';
import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';
import { ReactComponent as LikeIcon } from '../../../images/icons/like.svg';
import secondsToDurationString from '../../../utils/secondsToDurationString';
import Loader from '../Loader/Loader';
import { useAddMovieMutation, useDeleteMovieMutation } from '../../../services/moviesApi';

function Movie (props) {
  const [deleteMovie, { isLoading: isDeleteLoading }] = useDeleteMovieMutation();
  const [addMovie, { isLoading: isLikeLoading }] = useAddMovieMutation();

  let deleteButton = null;
  if (props.canBeDeleted) {
    deleteButton = (
      <Button
        className={`movie__delete-button ${isDeleteLoading ? 'movie__button_loading' : ''}`}
        type="icon"
        color="dark"
        ariaLabel="Удалить фильм из сохранённых"
        onClick={() => deleteMovie(props.movie._id)}
        disabled={isDeleteLoading}
      >
        {isDeleteLoading ? <Loader className="movie__button-loader" /> : <CloseIcon />}
      </Button>
    );
  }

  let likeButton = null;
  if (props.canBeLiked) {
    likeButton = (
      <Button
        className={`movie__like-button ${props.isLiked ? 'movie__like-button_liked' : ''} ${isLikeLoading || isDeleteLoading ? 'movie__button_loading' : ''}`}
        type="icon"
        color="dark"
        ariaLabel="Добавить фильм в сохранённые"
        onClick={() => {
          props.isLiked
            ? deleteMovie(props.savedMovieId)
            : addMovie({
              country: props.movie.country,
              director: props.movie.director,
              duration: props.movie.duration,
              year: props.movie.year,
              description: props.movie.description,
              image: `${process.env.REACT_APP_BEATFILMS_API_URL}${props.movie.image}`,
              trailerLink: props.movie.trailerLink,
              thumbnail: `${process.env.REACT_APP_BEATFILMS_API_URL}${props.movie.thumbnail}`,
              movieId: props.movie.movieId,
              nameRU: props.movie.nameRU,
              nameEN: props.movie.nameEN
            });
        }}
        disabled={isLikeLoading || isDeleteLoading}
      >
        {isLikeLoading || isDeleteLoading ? <Loader className="movie__button-loader" /> : <LikeIcon />}
      </Button>
    );
  }

  return (
    <div className="movie">
      <div className="movie__body">
        <div className="movie__cover">
          <a href={props.movie.trailerLink} target="_blank" rel="noreferrer" tabIndex="-1" className="movie__cover-link">
            <img
              className="movie__cover-image"
              src={`${process.env.REACT_APP_BEATFILMS_API_URL}${props.movie.image.replace(process.env.REACT_APP_BEATFILMS_API_URL, '')}`}
              alt={props.movie.nameRU}
            />
          </a>
        </div>
        <div className="movie__title-wrapper">
          <a className="movie__title" href={props.movie.trailerLink} target="_blank" rel="noreferrer">
            {props.movie.nameRU}
          </a>
          {deleteButton}
          {likeButton}
        </div>
      </div>
      <div className="movie__footer">
        <div className="movie__length">
          {secondsToDurationString(props.movie.duration * 60)}
        </div>
      </div>
    </div>
  );
}

export default Movie;
