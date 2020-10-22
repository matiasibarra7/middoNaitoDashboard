import React from 'react';
import { Component } from 'react'
import UsuarioMN from './UsuarioMN';


class MiddoNaito extends Component {
  constructor(props) {
    super(props);
    this.state = { userList: []}
  };

  setUser(users) {
    this.setState({ userList: users })
  };

  componentDidMount(){
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(dataFinal => {
        
        this.setUser(dataFinal.data)

      });
  }

  render() {
    let usuarios = this.state.userList
    return (
    <>
        
    <div>
      Aca abajo va a ir los nombres
      <ul>

      {usuarios.map((person, i) => {
        return <UsuarioMN 
          key= {i + person.firstName}
          firstName= {person.firstName}
        />
      })}
      </ul>

      

    </div>

    </>
    );
  }
}

export default MiddoNaito;
