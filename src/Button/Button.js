import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  
  static defaultProps = {
    styleClass: "btn-secondary",
    label: "default"
  }

  render() {
    return (
     <a href="#" className={`cusbtn btn my-2 ${this.props.buttonMeta.styleClass}`}>{this.props.buttonMeta.label}</a>
    );
  }
}

Button.PropTypes = {
	styleClass: PropTypes.string,
	label: PropTypes.string,
}

export default Button;

