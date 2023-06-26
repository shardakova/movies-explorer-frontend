import { useEffect, useState } from 'react';
import './SearchForm.sass';
import Switch from '../Switch/Switch';
import Button from '../Button/Button';
import { ReactComponent as SearchIcon } from '../../../images/icons/search.svg';

function SearchForm (props) {
  let savedValues;
  try {
    if (props.storageKey) {
      savedValues = JSON.parse(window.localStorage.getItem(props.storageKey));
    }
  } catch (err) {
    // Ignore
  }

  const [value, setValue] = useState(savedValues?.value || '');
  const [isShortFilmActive, setIsShortFilmActive] = useState(
    savedValues && Object.hasOwnProperty.call(savedValues, 'isShortFilmActive')
      ? savedValues.isShortFilmActive
      : true
  );

  function toggleIsShortFilmActive () {
    setIsShortFilmActive(prevIsShortFilmActive => !prevIsShortFilmActive);
  }

  useEffect(() => {
    const values = { isReady: true, fields: { value, isShortFilmActive } };
    if (props.storageKey) {
      window.localStorage.setItem(props.storageKey, JSON.stringify(values.fields));
    }
    props.onSearch(values);
  }, [value, isShortFilmActive]);

  return (
    <form
      className="search-form"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSearch({ isReady: true, fields: { value, isShortFilmActive } });
      }}
    >
      <div className="search-form__input-wrapper">
        <input
          type="search"
          placeholder={props.placeholder || 'Фильмы'}
          className="search-form__input"
          aria-required={true}
          aria-label="Поиск по фильмам"
          onInput={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <Button
          className="search-form__submit"
          type="icon"
          htmlType="submit"
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
