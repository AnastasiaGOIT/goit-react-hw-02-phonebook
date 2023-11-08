import css from './ContactList.module.css';

export const ContactList = ({ props, deleteContact }) => {
  return (
    <ul>
      {props.map(contact => (
        <li key={contact.id}>
          {contact.name}:{contact.number}
          <button
            className="form__delete"
            type="text"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
