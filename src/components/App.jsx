import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  createContact = data => {
    console.log(data);
  };
  isExist = name => {
    const isExist = this.state.contacts.some(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
  };

  addContact = ({ name, number }) => {
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
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
          onInputChange={this.onInputChange}
          contacts={this.state.contacts}
          addContact={this.addContact}
          isExist={this.isExist}
        />
        <h3>Contacts</h3>
        <Filter value={this.state.filter} onChange={this.onInputChange} />
        <ContactList props={visibleList} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
