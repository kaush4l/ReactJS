import { Card, Container, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';

const EducationComponent = () => {
    return (
        <Container>
            <Card style={{ paddingLeft:'10px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography variant='h4'>
                            University of North Carolina at Charlotte
                        </Typography>
                        <Typography align='center'>
                            January 2016 - May 2017
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4'>
                            Master's of Computer Science
                        </Typography>
                        <Typography variant='h6'>
                            The master's program has given me the opportunity to test my skills and apply practical knowledge. 
                            I did various projects which helped me understand the programming in a new perspective. I learned many new things 
                            and technologies. The hands on experience while working on many projects gave me a chance to challange myself. 
                            Subjects like Algorithms and data structures, Mobile Application development, Cloud Computing and Network based 
                            applications gave working experience on different technologies. Working on various projects gave me the confidence 
                            to understand the probelem and come up with different solutions to tackle it.
                        </Typography>
                        <Typography align='center' variant='h6' display='block' style={{ fontFamily:"Roboto"}}>
                            Good, better, best. Never let it rest. 'Till your good is better and your better is the best.'
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
            <Divider />
            <Card style={{ paddingLeft:'10px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography variant='h4'>
                            SRM University
                        </Typography>
                        <Typography align='center'>
                            August 2011 - May 2015
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4'>
                            Bachelor's in Information Technology
                        </Typography>
                        <Typography variant='h6'>
                            Learning has always been my interest. But this is the place that my interest turned towards coding and found passion in doing it. 
                            Various courses that I had taken have helped me lean many new things. Courses like Cryptography zealed my interest in understanding 
                            logics and findings ways of solving problems. The best things I learned was to understand things quickly. I was exposed to different 
                            tasks which helped me in moulding for a fast paced environment. I leaned many things and have been trying to make myslef even better. 
                            Everyday is a new challenge and a new day to lean things.
                        </Typography>
                        <Typography align='center' variant='h6' display='block' style={{ fontFamily:"Roboto"}}>
                            I adore the quote "You're given only a litte spark of madness. You mustn't lose it." - Robin Williams.
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default EducationComponent;
