// import React, { Component } from 'react';

// class Contact extends Component {
//   render() {
//     return (
//         <li>
//           <p>Some contact</p>
//         </li>
//     );
//   }
// }
import PropTypes from "prop-types";

const Contact = ({name, number, id}) => (
  <>
    <p>{name}: {number}</p>
    <button type="button" id={id}>Delete</button>
  </>
);

Contact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string
}

export { Contact };
