import React, { Component } from 'react';
import './Menu.css';

export class Menu extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="w3-container w3-round w3-sand fullWidth">
        <div className="w3-padding">
            <div className="w3-btn w3-topbar w3-round w3-hover-border-green w3-border-bottom w3-xlarge fullWidth">
                <i class="w3-left"/>{this.props.value}
            </div>
        </div>
      </div>
    );
  }
}
