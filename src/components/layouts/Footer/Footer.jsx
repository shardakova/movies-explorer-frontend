import './Footer.sass';

function Footer (props) {
  return (
    <footer className={`footer ${props.isLanding ? 'footer__landing' : ''}`}>
      <div className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">&copy; {new Date().getFullYear()}</div>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/shardakova" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
