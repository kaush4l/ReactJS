import React ,{ useState, useEffect } from 'react';
// import { Card, Container, Divider, Grid, Typography } from '@material-ui/core';
import MarkdownRenderer from './MarkdownRenderer';
import Education from './MdFiles/Education.md'

const EducationComponent = () => {

    const [educationContent, setEducationContent] = useState('')

    useEffect(() => {
        fetch(Education).then((response) => response.text()).then((text) => setEducationContent(text))
    })

    return (<MarkdownRenderer content= { educationContent } />)
}

export default EducationComponent;
