import React from 'react';
import Markdown from 'markdown-to-jsx';

const MarkdownTester = (props) => {
    return (
        <Markdown>
            {props.content}
        </Markdown>
    )

}            
        
export default MarkdownTester;