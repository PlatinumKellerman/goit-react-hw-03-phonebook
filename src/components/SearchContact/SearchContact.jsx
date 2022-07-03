import PropTypes from 'prop-types';
import s from './search-contact.module.css';

function SearchContact({ onChange, title, value }) {
  return (
    <label htmlFor="filter" className={s.search__title}>
      {title}
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

SearchContact.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchContact;
