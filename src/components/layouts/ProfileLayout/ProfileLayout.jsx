import './ProfileLayout.sass';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';

function ProfileLayout (props) {
  return (
    <Layout>
      <section className="profile-layout">
        <Header />
        <main>
          {props.children}
        </main>
      </section>
    </Layout>
  );
}

export default ProfileLayout;
