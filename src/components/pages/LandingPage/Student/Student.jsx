import './Student.sass';
import LandingHeader from '../LandingHeader/LandingHeader';
import StudentPhoto from '../../../../images/student-photo.jpg';

function Student () {
  return (
    <section className="student" id="student">
      <LandingHeader>Студент</LandingHeader>
      <section className="student__info">
        <div className="student__bio">
          <h3 className="student__name">Виталий</h3>
          <p className="student__occupation">Фронтенд-разработчик, 30 лет</p>
          <p className="student__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="student__links">
            <a href="https://github.com/shardakova" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
        <div>
          <img className="student__photo" src={StudentPhoto} alt="Виталий" />
        </div>
      </section>
      <section className="student__portfolio">
        <div className="student__portfolio-title">Портфолио</div>
        <div className="student__portfolio-links">
          <div className="student__portfolio-link">
            <a href="https://github.com/shardakova" target="_blank" rel="noreferrer">Статичный сайт</a>
          </div>
          <div className="student__portfolio-link">
            <a href="https://github.com/shardakova" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          </div>
          <div className="student__portfolio-link">
            <a href="https://github.com/shardakova" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Student;
