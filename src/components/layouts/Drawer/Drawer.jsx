import { Link } from 'react-router-dom';
import './Drawer.sass';
import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';
import { ReactComponent as ProfileIcon } from '../../../images/icons/profile.svg';
import Button from '../../elements/Button/Button';

function Drawer (props) {
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
          <Link to="/" className="drawer__menu-link">Главная</Link>
          <Link to="/movies" className="drawer__menu-link">Фильмы</Link>
          <Link to="/saved-movies" className="drawer__menu-link">Сохранённые фильмы</Link>
        </div>
        <Link to="/profile" className="drawer__profile-link">
        <span>
          Аккаунт
        </span>
          <span className="drawer__profile-link-icon">
          <ProfileIcon />
        </span>
        </Link>
      </div>
    </aside>
  );
}

export default Drawer;
