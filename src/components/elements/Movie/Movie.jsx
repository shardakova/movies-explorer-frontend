import './Movie.sass';
import Button from '../Button/Button';
import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';
import { ReactComponent as LikeIcon } from '../../../images/icons/like.svg';
import secondsToLengthString from '../../../utils/secondsToLengthString';

function Movie (props) {
  let deleteButton = null;
  if (props.canBeDeleted) {
    deleteButton = (
      <Button
        className="movie__delete-button"
        type="icon"
        color="dark"
        ariaLabel="Удалить фильм из сохранённых"
        onClick={() => props.onDelete()}>
        <CloseIcon />
      </Button>
    );
  }

  let likeButton = null;
  if (props.canBeLiked) {
    likeButton = (
      <Button
        className="movie__like-button"
        type="icon"
        color="dark"
        ariaLabel="Добавить фильм в сохранённые"
        onClick={() => props.onLike()}>
        <LikeIcon />
      </Button>
    );
  }

  return (
    <div className="movie">
      <div className="movie__body">
        <div className="movie__cover">
          <a href={props.trailerLink} target="_blank" rel="noreferrer" className="movie__cover-link">
            <img className="movie__cover-image" src={props.cover} alt={props.title} />
          </a>
        </div>
        <div className="movie__title-wrapper">
          <a className="movie__title" href={props.trailerLink} target="_blank" rel="noreferrer">
            {props.title}
          </a>
          {deleteButton}
          {likeButton}
        </div>
      </div>
      <div className="movie__footer">
        <div className="movie__length">
          {secondsToLengthString(props.duration)}
        </div>
      </div>
    </div>
  );
}

export default Movie;
