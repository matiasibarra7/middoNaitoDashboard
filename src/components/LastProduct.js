import React from 'react';
import { Component } from 'react'


class LastProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: null }
  };

  setLastProduct(product) {
    this.setState({ productData: product })
  };


  componentDidMount(){
    fetch('http://localhost:3000/api/products/last-product')
    .then(response => response.json())
    .then(lastProduct => {

      this.setLastProduct(lastProduct)

    });
  }

  render() {
    
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
            </div>
            <div className="card-body">
            {this.state.productData?
              <>
                <div className="text-center"> 
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={this.state.productData.imageUrl} alt="imagen dummy"/>   
                </div>
                <p>{this.state.productData.name}</p>
                <p>{this.state.productData.description}</p>
                <a href={`http://localhost:3000/products/details/${this.state.productData.id}`}>View product detail</a>
              </>
              : <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
            }
            </div>
        </div>
      </div>
    );
  }
}

export default LastProduct;
