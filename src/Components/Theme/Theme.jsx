import React, { Component } from 'react';
import { Markdown } from '../Markdown';
// import { RNFS } from 'react-native-fs';

export class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        one: null
    }
  }

  componentDidMount() {
      console.log(this.props)
    //   console.log(RNFS)
    // fetch(One).then((response) => response.text()).then((text) => this.setState({one: text}))
  }

  render() {
    return (
      <div className="w3-padding">
          <div>{this.props.list}</div>
        {/* <Markdown content={this.state.one} /> */}
    </div>
    );
  }
}
