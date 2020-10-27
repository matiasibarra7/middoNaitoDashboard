import React from 'react';
import { Component } from 'react'


class LastUser extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: null }
  };

  setLastUser(user) {
    this.setState({ userData: user })
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/users/last-user')
    .then(response => response.json())
    .then(lastUser => {

      this.setLastUser(lastUser)

    });
  };


  toggleModal() {
    let divModal = document.querySelector(".modal-naito");
  
    divModal.classList.toggle("active")

  };

  generateModal() {
    let modal = `
      <div class="close-icon-modal" onclick=toggleModal()>X</div>
      
      <h4><b>User Details</b></h4>
      <div>
        <p><b>First Name:</b> ${this.state.userData.firstName}</p>
        <p><b>Last Name:</b> ${this.state.userData.lastName}</p>
        <p><b>E-mail:</b> ${this.state.userData.email}</p>
        <p><b>Register Date:</b> ${this.state.userData.registerDate}</p>
        <p><b>Gender:</b> ${this.state.userData.gender? this.state.userData.gender : "Unspecified"}</p>
        <p><b>Province:</b> ${this.state.userData.province? this.state.userData.province : "Unspecified"}</p>
        <p><b>Location:</b> ${this.state.userData.location? this.state.userData.location : "Unspecified"}</p>
        <p><b>Birthday:</b> ${this.state.userData.birthday? this.state.userData.birthday : "Unspecified"}</p>
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
              <h6 className="m-0 font-weight-bold text-primary">Last user in Data Base</h6>
            </div>
            <div className="card-body">
              {this.state.userData?
                <>
                  <div className="text-center"> 
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={this.state.userData.imageUrl} alt="imagen dummy"/>   
                  </div>
                  <p>{this.state.userData.firstName} {this.state.userData.lastName}</p>
                  <p>Register date: {this.state.userData.registerDate}</p>
                  <button type="button" className="btn btn-info" onClick={ () => this.generateModal() }>View user details</button>
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

export default LastUser;
