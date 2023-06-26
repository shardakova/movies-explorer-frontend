import { Link, useNavigate } from 'react-router-dom';
import useAuthUser from '../../hooks/useAuthUser';
import { useEffect, useState } from 'react';
import useValidation from '../../hooks/useValidation';
import { toast } from 'react-toastify';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import Button from '../../elements/Button/Button';
import { useEditMeMutation } from '../../../services/userApi';
import { EMAIL_REGEXP } from '../../../utils/constants';

function EditProfilePage () {
  const navigate = useNavigate();
  const user = useAuthUser();
  const [onInput, errors, isValid] = useValidation();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [editMe, { data: signupResponse, error: signupResponseError, isLoading, isSuccess }] = useEditMeMutation();

  const handleSubmit = () => {
    editMe({ name, email, password });
  };

  useEffect(() => {
    if (signupResponse && isSuccess) {
      toast.success('Ваш профиль успешно отредактирован!');
      navigate('/profile');
    }
  }, [signupResponse]);

  const nameError = errors.name || signupResponseError?.data?.error?.name;
  const emailError = errors.email || signupResponseError?.data?.error?.email;
  const passwordError = errors.password || signupResponseError?.data?.error?.password;

  return (
    <AuthLayout title="Редактирование профиля">
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
            defaultValue={user.name}
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
            defaultValue={user.email}
          />
          {emailError && (<span className="form__error-text">{emailError}</span>)}
        </div>
        <div className={`form__field ${passwordError ? 'form__field_has-error' : ''}`}>
          <label htmlFor="password" className="form__label">Новый пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form__input"
            onInput={(event) => {
              setPassword(event.target.value);
              onInput(event);
            }}
            disabled={isLoading}
          />
          <span className="form__info-text">Оставьте поле пустым, если не хотите менять пароль.</span>
          {passwordError && (<span className="form__error-text">{passwordError}</span>)}
        </div>
        <div className="form__buttons">
          <Button
            ariaLabel="Сохранить"
            color="primary"
            htmlType="submit"
            disabled={isLoading || !isValid}
          >
            Сохранить
          </Button>
          <div className="form__buttons-text">
            Вернуться к <Link to="/profile" className="link link_color_primary">профилю</Link>.
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default EditProfilePage;
