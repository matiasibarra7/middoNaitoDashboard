import React from 'react';

function Usuario(props) {
  return (
    <li>
      {props.firstName} {props.lastName}
    </li>
  );
}

export default Usuario;
