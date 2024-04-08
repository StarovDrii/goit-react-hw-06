export default function deleteContact(setContact) {
  return function(id) {
    setContact((prevContact) => {
      return prevContact.filter((item) => item.id !== id);
    });
  };
}