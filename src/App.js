import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MFComp from './compenents/mf';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world
        <MFComp />
      </div>
    );
  }
}

export default App;
