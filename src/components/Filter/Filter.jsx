import React, { Component } from 'react';

class Filter extends Component {
  state = {
    name: '',
  };

  changeHandler = event => {
    this.setState({
      name: event.currentTarget.value,
    });
    this.props.changeAction(event.currentTarget.value);
  };

  render() {
    return (
      <div>
        <strong>Find contacts by name</strong>
        <input
          id="filter"
          type="text"
          name="filter"
          value={this.state.name}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export { Filter };
