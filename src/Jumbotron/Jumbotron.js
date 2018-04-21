import React, { Component } from 'react';
import './Jumbotron.css';
import Content from './Jumbotron.json';

/* custom component */
import Button from "../Button/Button";

class Jumbotron extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">{Content.title}</h1>
          <p className="lead text-muted">{Content.text}</p>
          <p>
            <Button buttonMeta={Content.buttons[0]}></Button>
            <Button buttonMeta={Content.buttons[1]}></Button>
          </p>
        </div>
      </section>
    );
  }
}

export default Jumbotron;

