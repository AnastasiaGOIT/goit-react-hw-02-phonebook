import css from './ContactForm.module.css';
export const ContactForm = ({
  handleSubmit,
  valueName,
  valueNumber,
  onInputChange,
}) => {
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        className={css.form__input}
        type="text"
        name="name"
        value={valueName}
        required
        onChange={onInputChange}
      />

      <label htmlFor="name">Number</label>
      <input
        className={css.form__input}
        type="tel"
        name="number"
        required
        value={valueNumber}
        onChange={onInputChange}
      />

      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
