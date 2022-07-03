import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem/index';
import s from './contacts.module.css';

export function Contacts({ filteredContacts, onContactDelete }) {
  return (
    <>
      <ul className={s.contacts__list}>
        <ContactsItem
          filteredContacts={filteredContacts}
          onContactDelete={onContactDelete}
        />
      </ul>
    </>
  );
}

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onContactDelete: PropTypes.func.isRequired,
};
