import { nanoid } from 'nanoid';

export default function addContact (setContact, newContact) {
  setContact((prevContacts) => {
    return [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ];
  });
}