import React from 'react';
import { Component } from 'react'

class MiddoNaito extends Component {
  
  componentDidMount(){
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(dataFinal => {
        console.log(dataFinal)
      });
  }
  render() {
    return (
    <>
        
      <div>algo</div>

    </>
    );
  }
}

export default MiddoNaito;
