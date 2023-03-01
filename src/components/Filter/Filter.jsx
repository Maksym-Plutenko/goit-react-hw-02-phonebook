import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <strong>Find contacts by name</strong>
        <input type="text" name="filter" />
      </div>
    );
  }
}

export { Filter };
