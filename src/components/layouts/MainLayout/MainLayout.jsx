import './MainLayout.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout';

function MainLayout (props) {
  return (
    <Layout>
      <section className={`main-layout ${props.isLanding ? 'main-layout_no-padding' : ''}`}>
        <Header isLanding={props.isLanding} />
        <main>
          {props.children}
        </main>
        <Footer isLanding={props.isLanding} />
      </section>
    </Layout>
  );
}

export default MainLayout;
