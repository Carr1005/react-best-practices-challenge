import React, { Component } from 'react';
import './Main.css';
import CardContent from './Main.json';

/* custom component */
import Card from "../Card/Card";

class Main extends Component {
  
  constructor() {
    super();
    this.cardsNum = 9;
    this.cardsCols = "col-md-4"; // bootstrap feature: https://getbootstrap.com/docs/4.0/layout/grid/#grid-options
    this.cardsSpace = "mb-4";    // https://getbootstrap.com/docs/4.0/utilities/spacing/#notation
  }

  generateCards(cardsNum, cardsCols, cardsSpace) {
    let cards = [];
    for (let i = 0; i < cardsNum; i++) {
      cards.push((<Card cardContent={CardContent.cards[0].content} gridCols={cardsCols} spacing={cardsSpace} key={i} ></Card>));
    }
    return cards;
  }

  render() {
    return (
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.generateCards(this.cardsNum, this.cardsCols, this.cardsSpace)}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;