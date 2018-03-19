import React, { Component } from 'react';
import { Header } from './Components/Header';
import { Menu } from './Components/Menu';
import { Dashboard } from './Components/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="w3-light-grey">
        <div className="Header"><Header /></div>
        <div className="w3-padding w3-margin"/>
        <div className="w3-row">
          <div className="Menu w3-padding w3-third"><Menu /></div>
          <div className="w3-twothird">
              <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
