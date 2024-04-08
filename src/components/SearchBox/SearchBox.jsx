import css from './SearchBox.module.css'
export default function SearchBar({ value, onSearch }) {
  return (
    <div className={css.wrap}>
      <label
        className={css.label}
        htmlFor="searchbar">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="searchbar"
        type="text"
        value={value}
        onChange={onSearch}
      />
    </div>
  );
}
