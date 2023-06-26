import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../elements/Button/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useAuthUser from '../../hooks/useAuthUser';
import useValidation from '../../hooks/useValidation';
import { useEffect, useState } from 'react';
import { useSignupMutation } from '../../../services/authApi';
import { toast } from 'react-toastify';
import { EMAIL_REGEXP } from '../../../utils/constants';

function SignupPage () {
  const navigate = useNavigate();
  const user = useAuthUser();
  const [onInput, errors, isValid] = useValidation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [signup, { data: signupResponse, error: signupResponseError, isLoading, isSuccess }] = useSignupMutation();

  const handleSubmit = () => {
    signup({ name, email, password });
  };

  useEffect(() => {
    if (signupResponse && isSuccess) {
      toast.success('Вы успешно зарегистрированы!');
      navigate('/signin');
    }
  }, [signupResponse]);

  const nameError = errors.name || signupResponseError?.data?.error?.name;
  const emailError = errors.email || signupResponseError?.data?.error?.email;
  const passwordError = errors.password || signupResponseError?.data?.error?.password;

  if (user) {
    return <Navigate to="/movies" replace />;
  }

  return (
    <AuthLayout title="Добро пожаловать!">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <div className={`form__field ${nameError ? 'form__field_has-error' : ''}`}>
          <label htmlFor="name" className="form__label">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form__input"
            minLength="2"
            maxLength="30"
            onInput={(event) => {
              setName(event.target.value);
              onInput(event);
            }}
            disabled={isLoading}
          />
          {nameError && (<span className="form__error-text">{nameError}</span>)}
        </div>
        <div className={`form__field ${emailError ? 'form__field_has-error' : ''}`}>
          <label htmlFor="email" className="form__label">E-mail</label>
          <input
            id="email"
            name="email"
            type="text"
            required="required"
            pattern={EMAIL_REGEXP}
            title="Введите адрес электронной почты"
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
            ariaLabel="Зарегистрироваться"
            color="primary"
            htmlType="submit"
            disabled={isLoading || !isValid}
          >
            Зарегистрироваться
          </Button>
          <div className="form__buttons-text">
            Уже зарегистрированы? <Link to="/signin" className="link link_color_primary">Войти</Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
