import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.sass';
import LayoutContext from '../../contexts/LayoutContext';
import Button from '../../elements/Button/Button';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../../images/icons/hamburger.svg';
import { ReactComponent as ProfileIcon } from '../../../images/icons/profile.svg';
import useAuthUser from '../../hooks/useAuthUser';

function Header (props) {
  const navigate = useNavigate();
  const { toggleDrawer } = useContext(LayoutContext);
  const user = useAuthUser();

  return (
    <header className={`header ${props.isLanding ? 'header__landing' : ''}`}>
      <div className="header__logo">
        <Link to="/" className="header__logo-link">
          <Logo />
        </Link>
      </div>
      {
        user
          ? (
            <>
              <div className="header__links mobile-only">
                <Button
                  type="icon"
                  ariaLabel="Открыть меню"
                  onClick={() => toggleDrawer()}>
                  <HamburgerIcon />
                </Button>
              </div>
              <div className="header__links header__links_logged-in desktop-only">
                <Link to="/movies">Фильмы</Link>
                <Link to="/saved-movies">Сохранённые фильмы</Link>
                <Link to="/profile" className="header__profile-link">
                  <span>
                    Аккаунт
                  </span>
                  <span className="header__profile-link-icon">
                    <ProfileIcon />
                  </span>
                </Link>
              </div>
            </>
            )
          : (
            <div className="header__links">
              <Link to="/signup">Регистрация</Link>
              <Button
                size="small"
                color="accent"
                ariaLabel="Войти"
                onClick={() => navigate('/signin')}>
                Войти
              </Button>
            </div>
            )
      }
    </header>
  );
}

export default Header;
