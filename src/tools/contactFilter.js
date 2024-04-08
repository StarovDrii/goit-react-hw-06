export default function filterContact(setFilter) {
  return function(e) {
    setFilter(e.target.value.toLowerCase().trim());
  };
}