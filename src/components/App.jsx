import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  createContact = data => {
    console.log(data);
  };
  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  // onNumberChange = e => {
  //   this.setState({ number: e.currentTarget.value });
  // };
  handleSubmit = e => {
    e.preventDefault();

    const name = this.state.name;
    const number = this.state.number;
    this.addContact(name, number);
  };
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
      number: '',
    }));
    console.log(contact);
  };

  render() {
    let normalized = this.state.filter.toLowerCase();
    let visibleList = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          onInputChange={this.onInputChange}
          valueName={this.state.name}
          valueNumber={this.state.number}
        />
        <h3>Contacts</h3>
        <Filter value={this.state.filter} onChange={this.onInputChange} />

        {/* <ContactList props={this.visibleList} /> */}
        <ul>
          {visibleList.map(contact => (
            <li key={contact.id}>
              {contact.name}:{contact.number}
              <button
                className="form__delete"
                type="text"
                onClick={() => this.deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
