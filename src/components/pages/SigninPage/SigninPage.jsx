import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../elements/Button/Button';
import { Link } from 'react-router-dom';

function SigninPage () {
  return (
    <AuthLayout title="Рады видеть!">
      <form className="form">
        <div className="form__field">
          <label htmlFor="email" className="form__label">E-mail</label>
          <input id="email" type="email" required="required" className="form__input" />
        </div>
        <div className="form__field">
          <label htmlFor="password" className="form__label">Пароль</label>
          <input id="password" type="password" required="required" className="form__input" />
        </div>
        <div className="form__buttons">
          <Button ariaLabel="Войти" color="primary">Войти</Button>
          <div className="form__buttons-text">
            Ещё не зарегистрированы? <Link to="/signup" className="link link_color_primary">Регистрация</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SigninPage;
