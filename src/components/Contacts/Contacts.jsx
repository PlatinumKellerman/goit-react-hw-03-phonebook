// import { nanoid } from 'nanoid';
import ContactsItem from './ContactsItem/ContactsItem';
import s from './contacts.module.css';

function Contacts({ title, ContactsFromList, deleteContact }) {
  return (
    <>
      <h2 className={s.contacts__title}>{title}</h2>
      <ul className={s.contacts__list}>
        <ContactsItem
          ContactsFromList={ContactsFromList}
          deleteContact={deleteContact}
        />
      </ul>
    </>
  );
}

export default Contacts;
