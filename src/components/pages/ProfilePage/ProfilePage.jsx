import './ProfilePage.sass';
import ProfileLayout from '../../layouts/ProfileLayout/ProfileLayout';
import { Link, useNavigate } from 'react-router-dom';
import useAuthUser from '../../hooks/useAuthUser';
import { useSignoutMutation } from '../../../services/authApi';
import { useEffect } from 'react';

function ProfilePage () {
  const navigate = useNavigate();
  const [signout, { data: signoutResponse }] = useSignoutMutation();
  const user = useAuthUser();

  useEffect(() => {
    if (signoutResponse) {
      navigate('/');
    }
  }, [signoutResponse]);

  return (
    <ProfileLayout>
      <div className="profile-page">
        <h1 className="profile-page__header">Привет, {user?.name}!</h1>
        <div className="profile-page__info">
          <div className="profile-page__item">
            <span>Имя</span>
            <span>{user?.name}</span>
          </div>
          <div className="profile-page__item">
            <span>E-mail</span>
            <span>{user?.email}</span>
          </div>
        </div>
        <div className="profile-page__buttons">
          <Link to="/edit-profile">Редактировать</Link>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              signout();
            }}
            className="link link_color_danger"
          >
            Выйти из аккаунта
          </a>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default ProfilePage;
