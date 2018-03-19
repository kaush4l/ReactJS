import React, { Component } from 'react';
import './Menu.css';

export class Menu extends Component {
  render() {
    return (
      <div className="w3-container w3-round w3-sand fullWidth">
        <div className="w3-btn w3-hover-border-green w3-round-xxlarge w3-green w3-xxlarge">Resume</div>
        <div className="w3-padding"/>
        <div className="">
            <div className="w3-btn w3-topbar w3-round w3-hover-border-green w3-border-bottom w3-xlarge fullWidth">
                <i class="fa fa-home w3-left"/>Dashboard</div>
            <div className="w3-btn w3-topbar w3-round w3-hover-border-green w3-border-bottom w3-xlarge fullWidth">
                <i class="fa fa-mortar-board w3-left"/>Education</div>
            <div className="w3-btn w3-topbar w3-round w3-hover-border-green w3-border-bottom w3-xlarge fullWidth">
                <i class="fa fa-skyatlas w3-left"/>Work</div>
            <div className="w3-btn w3-topbar w3-round w3-hover-border-green w3-border-bottom w3-xlarge fullWidth">
                <i class="fa fa-linux w3-left"/>Certifications</div>
            <div className="w3-btn w3-topbar w3-round w3-hover-border-green w3-border-bottom w3-xlarge fullWidth">
                <i class="fa fa-wrench w3-left"/>Skills</div>
        </div>
      </div>
    );
  }
}
