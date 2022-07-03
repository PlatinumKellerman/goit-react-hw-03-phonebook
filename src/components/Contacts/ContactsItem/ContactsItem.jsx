import PropTypes from 'prop-types';
import s from './contacts-item.module.css';

function ContactsItem({ filteredContacts, deleteContact }) {
  return filteredContacts.map(({ id, name, number }) => {
    return (
      <li className={s.contacts__item} key={id}>
        <p className={s.contact__name}>{name}</p>
        <p className={s.contact__number}>{number}</p>
        <button
          className={s.contact__delete}
          id={id}
          onClick={() => {
            deleteContact(id);
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
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
