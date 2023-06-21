import './About.sass';
import LandingHeader from '../LandingHeader/LandingHeader';
import Timeline from '../../../elements/Timeline/Timeline';

function About () {
  const timelineItems = [
    {
      time: '1 неделя',
      description: 'Back-end',
      weight: 1,
      completed: true
    },
    {
      time: '4 недели',
      description: 'Front-end',
      weight: 4,
      completed: false
    }
  ];

  return (
    <section className="about" id="about">
      <LandingHeader>О проекте</LandingHeader>
      <section className="about__articles">
        <article className="about__article">
          <h3 className="about__article-header">Дипломный проект включал 5 этапов</h3>
          <p className="about__article-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className="about__article">
          <h3 className="about__article-header">На выполнение диплома ушло 5 недель</h3>
          <p className="about__article-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </section>
      <section className="about__timeline">
        <Timeline items={timelineItems} />
      </section>
    </section>
  );
}

export default About;
