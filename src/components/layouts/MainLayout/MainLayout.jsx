import './MainLayout.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout';

function MainLayout (props) {
  return (
    <Layout>
      <div className={`main-layout ${props.isLanding ? 'main-layout_no-padding' : ''}`}>
        <Header isLanding={props.isLanding} />
        <div>
          {props.children}
        </div>
        <Footer isLanding={props.isLanding} />
      </div>
    </Layout>
  );
}

export default MainLayout;
