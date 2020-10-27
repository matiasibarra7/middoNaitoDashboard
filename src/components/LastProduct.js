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
  };

  toggleModal() {
    let divModal = document.querySelector(".modal-naito");
  
    divModal.classList.toggle("active")

  };

  generateModal() {
    let modal = `
      <div class="close-icon-modal" onclick=toggleModal()>X</div>
      
      <h4><b>Product Details</b></h4>
      <div>
        <p><b>Name:</b> ${this.state.productData.name}</p>
        <p><b>Category:</b> ${this.state.productData.category.name}</p>
        <p><b>Description:</b> ${this.state.productData.description}</p>
        <p><b>Price:</b> $ ${this.state.productData.price}</p>
        <table className="table table-bordered" id="dataTable" width="50%" cellSpacing="0">
            <thead>
              <th>Size</th>
              <th>Stock</th>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>${this.state.productData.sizes[0].products_sizes.stock}</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>${this.state.productData.sizes[1].products_sizes.stock}</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>${this.state.productData.sizes[2].products_sizes.stock}</td>
              </tr>
              <tr>
                <td>Extra Large</td>
                <td>${this.state.productData.sizes[3].products_sizes.stock}</td>
              </tr>
              <tr>
                <td>Extra Large+</td>
                <td>${this.state.productData.sizes[4].products_sizes.stock}</td>
              </tr>
            </tbody>
         </table>
      </div>
    `
    let divModalNaito = document.querySelector(".modal-naito")  
    divModalNaito.innerHTML = modal
    this.toggleModal()
  };


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
                  <button type="button" className="btn btn-info" onClick={ () => this.generateModal() }>View product details</button>
                </>
                : <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
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
