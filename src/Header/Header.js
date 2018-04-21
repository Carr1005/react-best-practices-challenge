import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="top" className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <i className="material-icons">photo_camera</i>
            <strong>Album</strong>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
