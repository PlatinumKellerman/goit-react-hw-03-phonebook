import s from './contacts-item.module.css';

function ContactsItem({ ContactsFromList, deleteContact }) {
  return ContactsFromList.map(({ id, name, number }) => {
    return (
      <li className={s.contacts__item} key={id}>
        <p className={s.contact__name}>{name}</p>
        <p className={s.contact__number}>{number}</p>
        <button
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

export default ContactsItem;
