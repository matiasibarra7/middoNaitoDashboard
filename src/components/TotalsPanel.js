import React from 'react';
import Card from './Card';
import { Component } from 'react'

class TotalsPanel extends Component{

  constructor(props) {
    super(props);
    this.state = { totalUsers: 20, totalProducts: null, totalCategories: 5}
  };

  setPanelInfo(data) {
    this.setState({ totalUsers: data[0], totalProducts: data[1], totalCategories: data[2] })
  };


  componentDidMount(){
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(dataFinal => {

        fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(dataFinalUsers => {

          let data = [dataFinalUsers.meta.count, dataFinal.meta.count, 5]
  
          this.setPanelInfo(data)
        })
        
      });
  }

  render() {
    const cardsData = [
      {title:  "Total Products", //total de productos
      value:  this.state.totalProducts,
      iconClass:  "fa-clipboard-list",
      colorClass:  "border-left-primary"},
  
      {title:  "Total Users", //total de usuarios
      value:  this.state.totalUsers,
      iconClass:  "fa-dollar-sign",
      colorClass:  "border-left-success"},
  
      {title: "Total Categories", //total de categorias
      value: this.state.totalCategories,
      iconClass: "fa-user-check",
      colorClass: "border-left-warning"},
    ]



    return (
      <div className="row">
            
        {cardsData.map((cardData, i) => {
          return <Card key={cardData.title + i} 
            title=  {cardData.title}
            value=  {cardData.value}
            iconClass=  {cardData.iconClass}
            colorClass=  {cardData.colorClass}
          />
        })}
        
      </div>
  
    );
  }
}


export default TotalsPanel;
