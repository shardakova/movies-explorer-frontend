import { Link } from 'react-router-dom';

function NoMatchPage () {
  return (
    <div className="layout__error">
      <div className="layout__error-content">
        <div className="layout__error-header">
          404
        </div>
        <div className="layout__error-text">
          Страница не найдена
        </div>
      </div>
      <div className="layout__error-back-link">
        <Link to="/" className="link link_color_primary">Назад</Link>
      </div>
    </div>
  );
}

export default NoMatchPage;
