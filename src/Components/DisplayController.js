import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import MarkdownComponent from './MarkdownComponent';
import DashboardComponent from './DashboardComponent'
import { darkTheme } from './Themes'

const componentToDisplay = (name) => {
  console.log(`./MdFiles/${name}.md`);
  if(name == "Dashboard") {
    return <DashboardComponent />
  } else {
    return <MarkdownComponent link={`./MdFiles/${name}.md`} />;
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
