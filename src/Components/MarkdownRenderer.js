import React from 'react';
import Markdown from 'markdown-to-jsx';

const MarkdownRenderer = (props) => {
    return (
        <Markdown>
            {props.content}
        </Markdown>
    )

}            
        
export default MarkdownRenderer;