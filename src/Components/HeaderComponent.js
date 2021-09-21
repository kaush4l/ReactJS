import React from 'react';
import { AppBar, Avatar, Toolbar } from '@material-ui/core';
import avatar from './Images/logo.jpg';
import resumePDF from './Kaushal-Latest.pdf';

const HeaderComponent = (props) => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Kaushal Kanakamedala
                </Typography>
                <a href={resumePDF} >
                    <Avatar src={avatar}/>
                </a>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
