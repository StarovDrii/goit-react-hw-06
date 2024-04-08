import css from './Contact.module.css'
export default function Contact({
  id,
  name,
  number,
  remover,
}) {
  return (
    <>
      <h2 className={css.name} >{name}</h2>
      <p  className={css.number}>{number}</p>
      <button className={css.btn} onClick={() => remover(id)}>Delete</button>
    </>
  );
}
