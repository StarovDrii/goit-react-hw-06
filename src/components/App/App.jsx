import ContactList from '../ContactList/ContactList';
import SearchBar from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect, useState } from 'react';
import getSavedContacts from '../../tools/getSavedContacts'
import saveContacts from '../../tools/saveContacts'
import handleAddContact from '../../tools/handleAddContact'
import contactFinder from '../../tools/contactFinder'
import filterContact from '../../tools/contactFilter'
import deleteContact from '../../tools/deleteContact'
import './App.css';


export default function App() {
  const [contact, setContact] = useState(getSavedContacts());
  const [filter, setFilter] = useState('');

  const foundContact = contactFinder(contact, filter);

  const addContact = (newContact) => {
    handleAddContact(setContact, newContact);
  };

  useEffect(() => {
    saveContacts(contact)
  },[contact])

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        addContact={addContact}
        contacts={contact}
      />
      <SearchBar value={filter} onSearch={filterContact(setFilter)} />
      <ContactList
        contacts={foundContact}
        remover={deleteContact(setContact)}
      />
    </div>
  );
}
