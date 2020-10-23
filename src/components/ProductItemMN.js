import React from 'react';

function ProductItemMN(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>${props.price}</td>
      <td>
          {props.category}  
      </td>
      <td>
        <ul>
          <li><span className="text-danger">{props.sizes[0].name}</span></li>
          <li><span className="text-primary">{props.sizes[1].name}</span></li>
          <li><span className="text-success">{props.sizes[2].name}</span></li>
          <li><span className="text-info">{props.sizes[3].name}</span></li>
          <li><span className="text-secondary">{props.sizes[4].name}</span></li>
        </ul>
      </td>
      <td>
        <ul>
          <li><span className="text-danger">{props.sizes[0].products_sizes.stock}</span></li>
          <li><span className="text-primary">{props.sizes[1].products_sizes.stock}</span></li>
          <li><span className="text-success">{props.sizes[2].products_sizes.stock}</span></li>
          <li><span className="text-info">{props.sizes[3].products_sizes.stock}</span></li>
          <li><span className="text-secondary">{props.sizes[4].products_sizes.stock}</span></li>
        </ul>
      </td>
     
    </tr>
  );
}

export default ProductItemMN;
