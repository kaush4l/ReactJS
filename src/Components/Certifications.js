import React, { Component } from 'react';

export class Certifications extends Component {
  render() {
    return (
        <div className="w3-display-container w3-padding">
            <img className="w3-hover-opacity KeyboardLogo" src={require('./IBM.png')} alt="cert" />
            <div class="w3-display-bottomright w3-container"><p>Curam certification</p></div>
        </div>
    );
  }
}
