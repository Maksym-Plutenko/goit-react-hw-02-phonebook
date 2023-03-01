import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(event.target);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.changeHandler}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.changeHandler}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export { ContactForm };
