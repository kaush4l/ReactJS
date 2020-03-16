import React, { Component } from 'react';
import logo from './Images/HeaderPhoto.jpg';
import pdf from './Files/Kaushal-Latest.pdf';

export class Header extends Component {

  render() {
    return (
      <header className="Header Material-black w3-container w3-padding w3-row-padding">
        <div className="w3-left w3-large">
          <a className="" href="https://www.linkedin.com/in/kaush4l/">
            <img src={logo} alt={logo} className="w3-circle App-logo"/>
            <div className="w3-left w3-margin">Kaushal Kanakamedala</div>
          </a>
        </div>
        <div className="w3-xxlarge w3-right">
          <a href={pdf} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-open-o"/></a>
        </div>
        <div className="clearFix"/>
      </header>
    );
  }
}
