import React, { Component } from 'react';
import logo from './logo.jpg';

export class Header extends Component {
  render() {
    return (
      <div className="w3-light-grey">
        <header className="App-header w3-padding w3-row-padding">
            <div className="w3-container">
                <div className="w3-third w3-xxlarge">
                    <i class="fa fa-navicon"></i>
                </div>
                <div className="w3-half w3-hide-medium w3-xxlarge">
                    <i class="fa fa-github w3-right">GitHub</i>
                </div>
                <div className="w3-right w3-hide-small">
                    <img src={logo} alt="photo" className="w3-circle App-logo"/>
                    <p className="w3-right w3-margin">Kaushal Kanakamedala</p>
                </div>
            </div>
            <div className="clearFix"/>
        </header>
      </div>
    );
  }
}
