import './Tech.sass';
import LandingHeader from '../LandingHeader/LandingHeader';

function Tech () {
  return (
    <section className="tech" id="tech">
      <LandingHeader>Технологии</LandingHeader>
      <h3 className="tech__title">7 технологий</h3>
      <p className="tech__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="tech__tags">
        <li className="tech__tag">HTML</li>
        <li className="tech__tag">CSS</li>
        <li className="tech__tag">JS</li>
        <li className="tech__tag">React</li>
        <li className="tech__tag">Git</li>
        <li className="tech__tag">Express.js</li>
        <li className="tech__tag">MongoDB</li>
      </ul>
    </section>
  );
}

export default Tech;
