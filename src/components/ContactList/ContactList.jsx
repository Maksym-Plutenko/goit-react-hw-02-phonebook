import React, { Component } from 'react';

import { Contact } from './Contact/Contact';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(elem => (
          <li key={elem.id}>
            <Contact name={elem.name} number={elem.number} id={elem.id} onDelete={this.props.onDelete} />
          </li>
        ))}
      </ul>
    );
  }
}

export { ContactList };
