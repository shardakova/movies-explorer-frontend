import './ProfileLayout.sass';
import Header from '../Header/Header';

function ProfileLayout (props) {
  return (
    <div className="profile-layout">
      <Header />
      {props.children}
    </div>
  );
}

export default ProfileLayout;
