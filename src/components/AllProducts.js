import React from 'react';
import ProductItem from './ProductItem'

function AllProducts() {
  const productData = [
    { 
      name: 'Tiger Nixon',
      description: 'System Architect',
      price: '$320,800',
      categories: ['1', '2', '3'],
      colors: ['Red', 'Blue', 'Green'],
      stock: 245
    },
    {
      name: 'Jane Doe',
      description: 'Fullstack developer',
      price: '$320,800',
      categories: ['1', '2', '3'],
      colors: ['Red', 'Blue', 'Green'],
      stock: 245
    },
    {
      name: 'Matías Ibarra',
      description: 'Fullstack developer, NodeJs and React',
      price: '$40,000',
      categories: ['1', '2', '3'],
      colors: ['Red', 'Blue', 'Green'],
      stock: 7
    },
    {
      name: 'Jennifer Arsuaga',
      description: 'Fullstack developer arquitect',
      price: '$720,800',
      categories: ['1', '2', '3'],
      colors: ['Red', 'Blue', 'Green'],
      stock: 120
    }
  ]

  const titleColumns = <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th>Categories</th>
    <th>Colors</th>
    <th>Stock</th>
  </tr>

  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
      
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                {titleColumns}
              </thead>
              <tfoot>
                {titleColumns}
              </tfoot>
              <tbody>
                {productData.map((person, i) => {
                  return <ProductItem 
                    key= {i + person.name}
                    name= {person.name}
                    description= {person.description}
                    price= {person.price}
                    categories= {person.categories}
                    colors= {person.colors}
                    stock= {person.stock}
                  />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  );
}

export default AllProducts;
