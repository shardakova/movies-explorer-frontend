import './Menu.sass';

function Menu () {
  return (
    <section className="menu">
      <a href="#about" className="menu__link">О проекте</a>
      <a href="#tech" className="menu__link">Технологии</a>
      <a href="#student" className="menu__link">Студент</a>
    </section>
  );
}

export default Menu;
