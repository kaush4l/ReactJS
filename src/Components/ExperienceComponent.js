import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
// import { Markdown } from './Markdown';
import ReactMarkdown from 'react-markdown';
import Oracle from './MdFiles/Experience/Oracle.md';
import Cerner from './MdFiles/Experience/Cerner.md';
import Esys from './MdFiles/Experience/Esys.md';
import Uniq from './MdFiles/Experience/Uniq.md';
import MarkdownRenderer from './MarkdownRenderer';

export class ExperienceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        oracle: '',
        cerner: '',
        esys: '',
        uniq: ''
    }
  }

  componentDidMount() {
        fetch(Oracle).then((response) => response.text()).then((text) => this.setState({ oracle: text }))
        fetch(Cerner).then((response) => response.text()).then((text) => this.setState({cerner: text}))
        fetch(Esys).then((response) => response.text()).then((text) => this.setState({esys: text}))
        fetch(Uniq).then((response) => response.text()).then((text) => this.setState({uniq: text}))
  }

  render() {
      let { oracle, cerner, esys, uniq } = this.state;
    return (
      <div className="w3-padding">
          <MarkdownRenderer content={ oracle }/>
          <Divider />
          <MarkdownRenderer content={ cerner }/>
          <Divider />
          <MarkdownRenderer content={ esys }/>
          <Divider />
          <MarkdownRenderer content={ uniq }/>
      </div>
    );
  }
}
