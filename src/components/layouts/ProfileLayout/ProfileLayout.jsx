import './ProfileLayout.sass';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';

function ProfileLayout (props) {
  return (
    <Layout>
      <div className="profile-layout">
        <Header />
        {props.children}
      </div>
    </Layout>
  );
}

export default ProfileLayout;
