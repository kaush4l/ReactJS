import React, { Component } from 'react';
import './Menu.css';

export class Menu extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="w3-container w3-padding fullWidth">
          <div className="w3-btn w3-xlarge fullWidth">
              {/* <i className="w3-left">{this.props.value}</i> */}
              {this.props.value}
          </div>
      </div>
    );
  }
}
