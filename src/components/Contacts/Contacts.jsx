import { nanoid } from 'nanoid';
import s from './contacts.module.css';

function Contacts({ title }) {
  return (
    <>
      <h2 className={s.contacts__title}>{title}</h2>
      <ul className={s.contacts__list}>
        <li className={s.contacts__item}>
          <p className={s.contact}></p>
        </li>
      </ul>
    </>
  );
}

export default Contacts;
