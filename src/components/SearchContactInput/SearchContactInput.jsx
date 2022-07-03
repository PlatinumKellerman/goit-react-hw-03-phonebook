import PropTypes from 'prop-types';
import s from './search-contact-input.module.css';

export function SearchContactInput({ onChange, title, value }) {
  return (
    <label htmlFor="filter" className={s.search__title}>
      {title}
      <input
        className={s.search__input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

SearchContactInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
