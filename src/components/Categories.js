import React from 'react';
import { Component } from 'react';
import Category from './Category';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: null }
  };

  setCategoriesInfo(data) {
    this.setState({ categories: data })
  };


  componentDidMount(){
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(productsData => {

        let data = productsData.meta.countByCategories

        this.setCategoriesInfo(data)

      });
  }

  render() {

    return (
      
      <div className="col-lg-12 mb-8">						
          <div className="card shadow mb-4">
              <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
              </div>
              <div className="card-body">
                {this.state.categories? 
                  <div className="row">

                    < Category products={this.state.categories['t-shirts']} name="T-shirts" />
                    < Category products={this.state.categories.shirts} name="Shirts" />
                    < Category products={this.state.categories.jackets} name="Jackets" />
                    < Category products={this.state.categories.pants} name="Pants" />
                    < Category products={this.state.categories.accesories} name="Accesories" />
                      
                  </div>
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

export default Categories;
