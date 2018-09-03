import React, { Component } from 'react';
import { Menu } from './Components/Menu';
import { Header } from './Components/Header';
import { Dashboard } from './Components/Dashboard';
import { ComponentController } from './Components/ComponentController';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      clicked : "Dashboard"
    }
  }


  handleOptionsClick(i){
    this.setState({
      clicked: i
    })
  }

  renderMenuItems(i){
    const menuItems = new Array("Dashboard","Education","Experience","Certifications", "Projects");
    return <Menu 
              value={menuItems[i]}
              onClick={() => this.handleOptionsClick(menuItems[i])} 
            />
  }

  render() {
    return (
      <div className="w3-light-grey">
        <div className="Header"><Header /></div>
        <div className="w3-row">
          <div className="Menu w3-padding w3-quarter">
            {this.renderMenuItems(0)}
            {this.renderMenuItems(1)}
            {this.renderMenuItems(2)}
            {this.renderMenuItems(3)}
            {this.renderMenuItems(4)}
          </div>
          <div className="w3-twothird w3-padding">
            <ComponentController value={this.state.clicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
