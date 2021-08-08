import React ,{ useState, useEffect } from 'react';
import Experience from './MdFiles/Experience.md';
import MarkdownRenderer from './MarkdownRenderer';


const ExperienceComponent = (props) => {

    const [experienceContent, setExperienceContent] = useState('')

    useEffect(() => {
        fetch(Experience).then((response) => response.text()).then((text) => setExperienceContent(text))
    })

    return (
        <MarkdownRenderer content={ experienceContent } />
    )
}

export default ExperienceComponent;