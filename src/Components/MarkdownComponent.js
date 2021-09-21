import React ,{ useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

const MarkdownComponent = (props) => {

    const [content, setContent] = useState('')

    useEffect(() => {
        import(`${props.link}`).then((module) => fetch(module.default).then((response) => response.text()).then((text) => setContent(text)))
    })

    return(<Markdown>{content}</Markdown>)
}

export default MarkdownComponent;