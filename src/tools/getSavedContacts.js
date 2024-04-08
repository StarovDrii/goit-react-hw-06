import contacts from "../data/contacts.json"

export default function getSavedContacts() {
    const savedContacts = localStorage.getItem("contacts-storage");
    return savedContacts !== null ? JSON.parse(savedContacts) : contacts;
}