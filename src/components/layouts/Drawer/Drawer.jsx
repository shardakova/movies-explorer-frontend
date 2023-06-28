import { useNavigate } from 'react-router-dom';
import './Drawer.sass';
import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';
import { ReactComponent as ProfileIcon } from '../../../images/icons/profile.svg';
import Button from '../../elements/Button/Button';

function Drawer (props) {
  const navigate = useNavigate();

  return (
    <aside className={`drawer ${props.isOpened ? 'drawer_opened' : ''}`}>
      <Button
        className="drawer__close-button"
        type="icon"
        ariaLabel="Закрыть меню"
        onClick={() => props.toggleDrawer()}>
        <CloseIcon />
      </Button>
      <div className="drawer__content">
        <div className="drawer__menu">
          <a
            href="/"
            className="drawer__menu-link"
            onClick={(event) => {
              event.preventDefault();
              props.toggleDrawer();
              navigate('/');
            }}
          >
            Главная
          </a>
          <a
            href="/movies"
            className="drawer__menu-link"
            onClick={(event) => {
              event.preventDefault();
              props.toggleDrawer();
              navigate('/movies');
            }}
          >
            Фильмы
          </a>
          <a
            href="/saved-movies"
            className="drawer__menu-link"
            onClick={(event) => {
              event.preventDefault();
              props.toggleDrawer();
              navigate('/saved-movies');
            }}
          >
            Сохранённые фильмы
          </a>
        </div>
        <a
          href="/profile"
          className="drawer__profile-link"
          onClick={(event) => {
            event.preventDefault();
            props.toggleDrawer();
            navigate('/profile');
          }}
        >
          <span>
            Аккаунт
          </span>
          <span className="drawer__profile-link-icon">
            <ProfileIcon />
          </span>
        </a>
      </div>
    </aside>
  );
}

export default Drawer;
