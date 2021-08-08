import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import DisplayController from './Components/DisplayController'
import MenuComponent from './Components/MenuComponent';
import { darkTheme } from './Components/Themes'


const App = (props) => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard')
  return (
    <ThemeProvider theme={darkTheme}>
        {/* Fix later to show name and phone on the AppBar */}
        {/* <HeaderComponent />  */}
        {/* Make it mini varient when it will collapse for mobile display */}
        <MenuComponent clickFunction={(page) => setSelectedComponent(page)}/>
        <DisplayController component={selectedComponent}/>
    </ThemeProvider>
  );
}

export default App;
