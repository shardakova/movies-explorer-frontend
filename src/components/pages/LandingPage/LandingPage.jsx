import MainLayout from '../../layouts/MainLayout/MainLayout';
import TopBanner from './TopBanner/TopBanner';
import Menu from './Menu/Menu';
import About from './About/About';
import Tech from './Tech/Tech';
import Student from './Student/Student';

function LandingPage () {
  return (
    <MainLayout isLanding={true}>
      <TopBanner />
      <Menu />
      <About />
      <Tech />
      <Student />
    </MainLayout>
  );
}

export default LandingPage;
