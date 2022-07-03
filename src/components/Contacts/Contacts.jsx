import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem/ContactsItem';
import s from './contacts.module.css';

function Contacts({ title, filteredContacts, deleteContact }) {
  return (
    <>
      <h2 className={s.contacts__title}>{title}</h2>
      <ul className={s.contacts__list}>
        <ContactsItem
          filteredContacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </ul>
    </>
  );
}

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
