import React, { Component } from 'react';
import logo from './logo.jpg';
import pdf from './Kaushal-Latest.pdf';

export class Header extends Component {

  render() {
    return (
      <div className="w3-light-grey">
        <header className="App-header w3-padding w3-row-padding">
            <div className="w3-container">
                <div className="w3-third w3-xxlarge">
                    <a href={pdf} target="_blank"><i class="fa fa-navicon"></i></a>
                </div>
                <div className="w3-half w3-hide-medium w3-xxlarge">
                    <a href="https://github.com/kaush4l?tab=repositories"><i class="fa fa-github w3-right">GitHub</i></a>
                </div>
                <div className="w3-right w3-hide-small">
                    <img src={logo} alt="photo" className="w3-circle App-logo"/>
                    <a href="https://www.linkedin.com/in/kaush4l/">
                    <p className="w3-right w3-margin">Kaushal Kanakamedala</p></a>
                </div>
            </div>
            <div className="clearFix"/>
        </header>
      </div>
    );
  }
}
