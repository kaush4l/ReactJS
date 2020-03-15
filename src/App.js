import React, { Component } from 'react';
import { Menu } from './Components/Menu';
import { Header } from './Components/Header';
import { ComponentController } from './Components/ComponentController';
import { Footer } from './Components/Footer';
import './App.css';

//The entry point to the application
class App extends Component {

  // For the main class control the state of the children
  constructor(props){
    super(props);
    this.state = {
      clicked : "" // The default page to display
    }
  }


  handleOptionsClick(i){
    this.setState({
      clicked: i
    })
  }

  renderMenuItems(){
    const menuItems = ["Dashboard","Education","Experience", "Projects"];
    return (<>{menuItems.map((item) => <Menu value={item} key={item} onClick={() => this.handleOptionsClick(item)}/>)}</>)
  }

  render() {
    return (
      <div className="Material-black w3-container">
        <div className="Header w3-container">
          <Header />
        </div>
        <div className="w3-container Content">
          <div className="w3-quarter w3-hide-small">
            {this.renderMenuItems()}
          </div>
          <div className="w3-twothird">
            <ComponentController value={this.state.clicked} />
          </div>
        </div>
        <div className="Footer Material-black w3-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
