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


  componentDidMount(){
    fetch('http://localhost:3000/api/users/last')
    .then(response => response.json())
    .then(lastUser => {

      this.setLastUser(lastUser)

    });
  }

  render() {
    
    return (
      <>
        {this.state.userData? 
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last user in Data Base</h6>
                </div>
                <div className="card-body">
                  <div className="text-center"> 
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={this.state.userData.imageUrl} alt="imagen dummy"/>   
                  </div>
                  <p>{this.state.userData.firstName} {this.state.userData.lastName}</p>
                  <p>Register date: {this.state.userData.registerDate}</p>
                  <a href={`http://localhost:3000/api/users/${this.state.userData.id}`}>View user detail</a>
                </div>
            </div>
          </div>
          :<div>Cargando...</div>
        }
      </>
    );
  }
}

export default LastUser;
