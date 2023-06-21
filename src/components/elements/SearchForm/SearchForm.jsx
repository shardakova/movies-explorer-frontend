import { useState } from 'react';
import './SearchForm.sass';
import Switch from '../Switch/Switch';
import Button from '../Button/Button';
import { ReactComponent as SearchIcon } from '../../../images/icons/search.svg';

function SearchForm (props) {
  const [isShortFilmActive, setIsShortFilmActive] = useState(true);

  function toggleIsShortFilmActive () {
    setIsShortFilmActive(prevIsShortFilmActive => !prevIsShortFilmActive);
  }

  return (
    <form className="search-form">
      <div className="search-form__input-wrapper">
        <input
          type="text"
          placeholder={props.placeholder || 'Фильмы'}
          className="search-form__input"
          role="search"
          aria-required={true}
          aria-label="Поиск по фильмам"
        />
        <Button
          className="search-form__submit"
          type="icon"
          color="primary"
          ariaLabel="Искать по фильмам"
        >
          <SearchIcon />
        </Button>
      </div>
      <div className="search-form__switch">
        <Switch
          text="Короткометражки"
          isActive={isShortFilmActive}
          onChange={toggleIsShortFilmActive}
        />
      </div>
    </form>
  );
}

export default SearchForm;
