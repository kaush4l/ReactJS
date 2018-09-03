import React, { Component } from 'react';
import { Dashboard } from './Dashboard';
import { Education } from './Education';
import { Experience } from './Experience';
import { Certifications } from './Certifications';
import { Projects } from './Projects';

export class ComponentController extends Component {
  render() {
    const compSelected = this.props.value;
    switch(compSelected){
      case "Dashboard":
        return <Dashboard />;
        break;
      case "Education":
        return <Education />;
        break;
      case "Experience":
        return <Experience />
        break;
      case "Certifications":
        return <Certifications />
        break;
      case "Projects":
        return <Projects />;
        break;
    }
  }
}
