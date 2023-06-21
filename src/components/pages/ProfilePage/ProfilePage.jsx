import './ProfilePage.sass';
import ProfileLayout from '../../layouts/ProfileLayout/ProfileLayout';
import { Link } from 'react-router-dom';

function ProfilePage () {
  return (
    <ProfileLayout>
      <div className="profile-page">
        <h1 className="profile-page__header">Привет, Виталий!</h1>
        <div className="profile-page__info">
          <div className="profile-page__item">
            <span>Имя</span>
            <span>Виталий</span>
          </div>
          <div className="profile-page__item">
            <span>E-mail</span>
            <span>pochta@yandex.ru</span>
          </div>
        </div>
        <div className="profile-page__buttons">
          <Link to="/profile">Редактировать</Link>
          <Link to="/profile" className="link link_color_danger">Выйти из аккаунта</Link>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default ProfilePage;
