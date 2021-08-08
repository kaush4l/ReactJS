import React ,{ useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import Projects from './MdFiles/Projects.md'

const ProjectsComponent = (props) => {

    const [projectsContent, setProjectsContent] = useState('')

    useEffect(() => {
        fetch(Projects).then((response) => response.text()).then((text) => setProjectsContent(text))
    })

    return (
      <MarkdownRenderer content={ projectsContent } />
    );
}

export default ProjectsComponent;
