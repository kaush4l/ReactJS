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
    const menuItems = ["Dashboard","Education","Experience", "Projects", "Markdown"];
    return (<>{menuItems.map((item) => <Menu value={item} key={item} onClick={() => this.handleOptionsClick(item)}/>)}</>)
  }

  render() {
    return (
      <div className="w3-light-grey">
        <div className="Header">
          <Header />
        </div>
        <div className="w3-container">
          <div className="w3-quarter">
            {this.renderMenuItems()}
          </div>
          <div className="w3-twothird">
            <ComponentController value={this.state.clicked} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
