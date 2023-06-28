import './MainLayout.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function MainLayout (props) {
  return (
    <div className={`main-layout ${props.isLanding ? 'main-layout_no-padding' : ''}`}>
      <Header isLanding={props.isLanding} />
      <div>
        {props.children}
      </div>
      <Footer isLanding={props.isLanding} />
    </div>
  );
}

export default MainLayout;
