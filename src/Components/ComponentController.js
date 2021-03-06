import React, { Component } from 'react';
import { Dashboard } from './Dashboard';
import { Education } from './Education';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Markdown } from './Markdown';

export class ComponentController extends Component {
  render() {
    const compSelected = this.props.value;
    switch(compSelected){
      case "Education":
        return <Education />;
      case "Experience":
        return <Experience />;
      case "Projects":
        return <Projects />;
      case "Markdown":
        return <Markdown />
      default:
        return <Dashboard />;
    }
  }
}
