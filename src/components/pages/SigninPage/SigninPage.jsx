import { useEffect, useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../elements/Button/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSigninMutation } from '../../../services/authApi';
import useValidation from '../../hooks/useValidation';
import useAuthUser from '../../hooks/useAuthUser';

function SigninPage () {
  const navigate = useNavigate();
  const user = useAuthUser();
  const [onInput, errors, isValid] = useValidation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signin, { data: signinResponse, error: signinResponseError, isLoading, isSuccess }] = useSigninMutation();

  const handleSubmit = () => {
    signin({ email, password });
  };

  useEffect(() => {
    if (signinResponse && isSuccess) {
      navigate('/movies');
    }
  }, [signinResponse]);

  const emailError = errors.email || signinResponseError?.data?.error?.email;
  const passwordError = errors.password || signinResponseError?.data?.error?.password;

  if (user) {
    return <Navigate to="/movies" replace />;
  }

  return (
    <AuthLayout title="Рады видеть!">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <div className={`form__field ${emailError ? 'form__field_has-error' : ''}`}>
          <label htmlFor="email" className="form__label">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required="required"
            className="form__input"
            onInput={(event) => {
              setEmail(event.target.value);
              onInput(event);
            }}
            disabled={isLoading}
          />
          {emailError && (<span className="form__error-text">{emailError}</span>)}
        </div>
        <div className={`form__field ${passwordError ? 'form__field_has-error' : ''}`}>
          <label htmlFor="password" className="form__label">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            required="required"
            className="form__input"
            onInput={(event) => {
              setPassword(event.target.value);
              onInput(event);
            }}
            disabled={isLoading}
          />
          {passwordError && (<span className="form__error-text">{passwordError}</span>)}
        </div>
        <div className="form__buttons">
          <Button
            ariaLabel="Войти"
            color="primary"
            htmlType="submit"
            disabled={isLoading || !isValid}
          >
            Войти
          </Button>
          <div className="form__buttons-text">
            Ещё не зарегистрированы? <Link to="/signup" className="link link_color_primary">Регистрация</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SigninPage;
