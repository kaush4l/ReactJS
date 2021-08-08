import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Markdown } from './Markdown';
import DashboardComponent from './DashboardComponent'
import EducationComponent  from './EducationComponent';
import ExperienceComponent from './ExperienceComponent';
import { darkTheme } from './Themes'
import ProjectsComponent from './ProjectsComponent';


const componentToDisplay = (name) => {
    switch(name) {
      case "Education":
        return <EducationComponent />;
      case "Experience":
        return <ExperienceComponent />;
      case "Projects":
        return <ProjectsComponent />;
      case "Markdown":
        return <Markdown />
      default:
        return <DashboardComponent />;
    }
}

const DisplayController = (props) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <main style={{marginLeft:'180px'}}>
                { componentToDisplay(props.component) }
            </main>
        </ThemeProvider>
    );
}

export default DisplayController;
