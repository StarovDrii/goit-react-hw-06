import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts, remover }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            remover={remover}
          />
        </li>
      ))}
    </ul>
  );
}
