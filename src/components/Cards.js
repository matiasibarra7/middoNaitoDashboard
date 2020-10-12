import React from 'react';
import Card from './Card';

function Cards() {
  const cardsData = [
    {title:  "Products in Data Base",
    value:  "135",
    iconClass:  "fa-clipboard-list",
    colorClass:  "border-left-primary"},

    {title:  "Amount in products",
    value:  "$546.456",
    iconClass:  "fa-dollar-sign",
    colorClass:  "border-left-success"},

    {title: "Users quantity",
    value: "38",
    iconClass: "fa-user-check",
    colorClass: "border-left-warning"},
    {
      
    }
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


export default Cards;
