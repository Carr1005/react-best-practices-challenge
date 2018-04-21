import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
     <a href="#" className={"cusbtn btn my-2 "+this.props.buttonMeta.styleClass}>{this.props.buttonMeta.label}</a>
    );
  }
}

export default Button;

