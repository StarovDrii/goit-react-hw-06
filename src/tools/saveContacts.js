export default function saveContacts(contact) {
  localStorage.setItem("contacts-storage", JSON.stringify(contact));
}