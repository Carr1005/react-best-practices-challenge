import React, { Component } from 'react';
import './App.css';

/* custom component */
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Jumbotron></Jumbotron>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
