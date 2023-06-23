import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../elements/Button/Button';
import { Link } from 'react-router-dom';

function SignupPage () {
  return (
    <AuthLayout title="Добро пожаловать!">
      <form className="form">
        <div className="form__field">
          <label htmlFor="name" className="form__label">Имя</label>
          <input id="name" type="text" className="form__input" />
        </div>
        <div className="form__field">
          <label htmlFor="email" className="form__label">E-mail</label>
          <input id="email" type="email" required="required" className="form__input" />
        </div>
        <div className="form__field">
          <label htmlFor="password" className="form__label">Пароль</label>
          <input id="password" type="password" required="required" className="form__input" />
        </div>
        <div className="form__buttons">
          <Button ariaLabel="Зарегистрироваться" color="primary">Зарегистрироваться</Button>
          <div className="form__buttons-text">
            Уже зарегистрированы? <Link to="/signin" className="link link_color_primary">Войти</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
