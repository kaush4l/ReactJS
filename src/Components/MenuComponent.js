import React from 'react';
import { Avatar, Box, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar, Tooltip } from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import WorkIcon from '@material-ui/icons/Work';
import avatar from './Images/logo.jpg';
import resumePDF from './Kaushal-Latest.pdf';

const MenuItems = ["Dashboard", "Education", "Experience", "Projects"];
const MenuIcons = [<HomeIcon/>, <BookIcon/>, <WorkIcon/>, <HomeWorkIcon/>];

const MenuComponent = (props) => {
    return (
        <Drawer variant='permanent'>
            <Toolbar/>
            <List>
                <Tooltip title='Resume'>
                    <Toolbar variant='dense'>
                        <Box mx='auto'>
                            <a href={resumePDF} >
                                <Avatar src={avatar}/>
                            </a>
                        </Box>
                    </Toolbar>
                </Tooltip>
                <ListItemText primary='Kaushal Kanakamedala'/>
                <Divider />
                {MenuItems.map((text, index) => (
                    <ListItem button key={text} onClick={() => props.clickFunction(text)}>
                        <ListItemIcon>{MenuIcons[index]}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default MenuComponent;
