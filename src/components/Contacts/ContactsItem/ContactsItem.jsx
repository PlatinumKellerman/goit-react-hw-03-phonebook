import PropTypes from 'prop-types';
import { FcPhoneAndroid } from 'react-icons/fc';
import s from './contacts-item.module.css';

export function ContactsItem({ filteredContacts, onContactDelete }) {
  return filteredContacts.map(({ id, name, number }) => {
    return (
      <li className={s.contacts__item} key={id}>
        <p className={s.contact__name}>
          <FcPhoneAndroid size="20" className={s.icon} />
          {name}:
        </p>
        <p className={s.contact__number}>{number}</p>
        <button
          className={s.contact__delete}
          id={id}
          onClick={() => {
            onContactDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
}

ContactsItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onContactDelete: PropTypes.func.isRequired,
};
