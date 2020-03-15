import React, { Component } from 'react';
import './Dashboard.css';

export class Dashboard extends Component {
  render() {
    return (
      <div className="w3-display-container">
        <img className="w3-opacity-max w3-hover-opacity KeyboardLogo" src={require('./main.jpg')} alt="logo" />
        <div className="w3-allerta w3-xlarge">"When the body gets tired, mind says 
            'This is where winners are made.' When mind gets tired, my heart says 
            'This is where Champions are made.'" - Baylor Barbee</div>
      </div>
    );
  }
}
