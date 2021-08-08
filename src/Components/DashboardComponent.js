import React from 'react';
import { Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import typingImage from './Images/main.jpg'

const DashboardComponent = () => {
    return (
        <Container>
            <Card >
                <CardMedia>
                    <img src={typingImage} width='100%' height='90%' />
                </CardMedia>
                <CardContent>
                    <Typography >
                        "When the body gets tired, mind says 
                        'This is where winners are made.' When mind gets tired, my heart says 
                        'This is where Champions are made.'" - Baylor Barbee
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default DashboardComponent;
