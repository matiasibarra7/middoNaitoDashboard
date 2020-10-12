import React from 'react';

function ProductItem(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>
        <ul>
          <li>Category {props.categories[0]}</li>
          <li>Category {props.categories[1]}</li>
          <li>Category {props.categories[2]}</li>
        </ul>
      </td>
      <td>
        <ul>
          <li><span class="text-danger">{props.colors[0]}</span></li>
          <li><span class="text-primary">{props.colors[1]}</span></li>
          <li><span class="text-success">{props.colors[2]}</span></li>
        </ul>
      </td>
      <td>{props.stock}</td>
    </tr>
  );
}

export default ProductItem;
