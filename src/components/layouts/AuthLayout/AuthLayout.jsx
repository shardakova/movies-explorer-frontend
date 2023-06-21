import './AuthLayout.sass';
import Layout from '../Layout/Layout';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

function AuthLayout (props) {
  return (
    <Layout>
      <section className="auth-layout">
        <main className="auth-layout__content">
          <div className="auth-layout__logo">
            <Link className="auth-layout__logo-link" to="/">
              <Logo />
            </Link>
          </div>
          <h1 className="auth-layout__header">{props.title}</h1>
          {props.children}
        </main>
      </section>
    </Layout>
  );
}

export default AuthLayout;
