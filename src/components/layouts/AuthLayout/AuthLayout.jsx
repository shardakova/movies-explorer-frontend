import './AuthLayout.sass';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

function AuthLayout (props) {
  return (
    <div className="auth-layout">
      <div className="auth-layout__content">
        <div className="auth-layout__logo">
          <Link className="auth-layout__logo-link" to="/">
            <Logo />
          </Link>
        </div>
        <h1 className="auth-layout__header">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
}

export default AuthLayout;
