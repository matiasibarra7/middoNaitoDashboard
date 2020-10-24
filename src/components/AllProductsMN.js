import React, { Component } from 'react';
import ProductItemMN from './ProductItemMN'

class AllProducts extends Component{
  constructor(props) {
    super(props);
    this.state = { productsList: null }
  };

  setProductsList(products) {
    this.setState({ productsList: products })
  };


  componentDidMount() {
    fetch('http://localhost:3000/api/products/all')
    .then(response => response.json())
    .then(productsData => {

      this.setProductsList(productsData)

    });
  }
  render() {

    return (
      <>
        <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
        
        <div className="card shadow mb-4">
          <div className="card-body">
          
          {this.state.productsList? 
  
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                 <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Categories</th>
                  <th>Size</th>
                  <th>Stock</th>
                </tr>

                </thead>
                <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Size</th>
                  <th>Stock</th>
                </tr>

                </tfoot>
                <tbody>
                  {this.state.productsList.map((product, i) => {
                    return <ProductItemMN
                      key= {i + product.name}
                      name= {product.name}
                      description= {product.description}
                      price= {product.price}
                      category= {product.category.name}
                      sizes= {product.sizes}
                    />
                  })}
                </tbody>
              </table>
            </div>
          : <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
          </div>
        </div>
        
  
      </>
    );
  }
  
}

export default AllProducts;
