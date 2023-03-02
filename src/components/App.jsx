import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    contact.id = nanoid();
    const newContacts = [...this.state.contacts, contact];
    this.setState({
      contacts: newContacts,
    });
  };

  setFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  formContactList = filter => {
    const contacts = this.state.contacts;
    const newContactList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return newContactList;
  };

  render() {
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
        <ContactForm submitAction={this.addContact} />
        <h2>Contacts</h2>
        <Filter changeAction={this.setFilter} />
        <ContactList contacts={this.formContactList(this.state.filter)} />
      </div>
    );
  }
}

export { App };
