import React from 'react';
import Card from './Card';
import { Component } from 'react'
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


class TotalsPanel extends Component{

  constructor(props) {
    super(props);
    this.state = { totalUsers: null, totalProducts: null, totalCategories: null, totalPrice: 0}
  };

  setPanelInfo(data) {
    this.setState({ totalUsers: data[0], totalProducts: data[1], totalCategories: data[2], totalPrice: data[3] })
  };


  componentDidMount() {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(dataFinal => {

        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(dataFinalUsers => {

          fetch('http://localhost:3000/api/products/total')
          .then(response => response.json())
          .then(sumPrices => {

            let data = [dataFinalUsers.meta.count, dataFinal.meta.count, 5, sumPrices.total]
    
            this.setPanelInfo(data)
          })

        })
        
      });
  }

  render() {
    const cardsData = [
      {title:  "Total Products", //total de productos
      value:  this.state.totalProducts,
      iconClass:  "fa-tshirt",
      colorClass:  "border-left-primary"},
  
      {title:  "Total Users", //total de usuarios
      value:  this.state.totalUsers,
      iconClass:  "fa-user-check",
      colorClass:  "border-left-success"},
  
      {title: "Total Categories", //total de categorias
      value: this.state.totalCategories,
      iconClass: "fa-clipboard-list",
      colorClass: "border-left-warning"},

      {title: "Total Price Products", //total de categorias
      value: `$ ${toThousand(this.state.totalPrice)}`,
      iconClass: "fa-dollar-sign",
      colorClass: "border-left-secondary"},
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
