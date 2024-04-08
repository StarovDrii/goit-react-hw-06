export default function contactFinder(contact, filter) {
    return contact.filter((filteredContacts) =>
    filteredContacts.name
      .toLowerCase()
      .includes(filter.toLocaleLowerCase()),
  )
}