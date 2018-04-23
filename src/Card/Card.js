import React, { Component } from 'react';
import holderjs from 'holderjs'
import './Card.css';

class Card extends Component {
  

  render() {
    console.log('render');
    return (
      <div className={this.props.gridCols}>
        <div className={`card ${this.props.spacing} box-shadow`}>
          <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"></img>
          <div className="card-body">
            <p className="card-text">{this.props.cardContent.text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">{this.props.cardContent.button[0].label}</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">{this.props.cardContent.button[1].label}</button>
                </div>
                <small className="text-muted">{this.props.cardContent.time}</small>
              </div>
          </div>
        </div>
      </div>
    );
    
  }
}

export default Card;