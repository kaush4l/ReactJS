import React, { Component } from 'react';
import { Dashboard } from './Dashboard';
import { Education } from './Education';
import { Experience } from './Experience';
import { Projects } from './Projects';
// import { TestMarkdown } from './TestMarkdown';
import { Theme } from './Theme/Theme';

const ThemeList = [1 , 2, 3]

export class ComponentController extends Component {
  render() {
    const compSelected = this.props.value;
    switch(compSelected) {
      case "Education":
        return <Education />;
      case "Experience":
        return <Experience />;
      case "Projects":
        return <Projects />;
      case "Theme":
        return <Theme list={ThemeList}/>;
      // case "Markdown":
      //   return <TestMarkdown />
      default:
        return <Dashboard />;
    }
  }
}
