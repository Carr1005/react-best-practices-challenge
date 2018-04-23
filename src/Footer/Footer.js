import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  
  handleClick(e) {
    e.preventDefault();
    let target = e.currentTarget.href.split("#")[1];
    let targetComp = document.getElementById(target);
    if (targetComp) {
      targetComp.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
  
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <div className="float-right">
            <a href="#top" onClick={this.handleClick}>Back to top</a>
          </div>
          <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">getting started guide</a>.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;