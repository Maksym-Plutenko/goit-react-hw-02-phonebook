import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Contact extends Component {
  clickHandler = event => {
    // console.log(event.currentTarget.id);
    this.props.onDelete(event.currentTarget.id);
  }


  render() {
    const { name, number, id} = this.props;
    return (
      <>
        <span>
          {name}: {number}
        </span>
        <button type="button" id={id} onClick={this.clickHandler}>
          Delete
        </button>
      </>
    );
  }
}

// const Contact = ({name, number, id, onDelete}) => (
//   <>
//     <span>{name}: {number}</span>
//     <button type="button" id={id} onClick={this.props.onDelete} >Delete</button>
//   </>
// );

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export { Contact };
