import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = (props) => {
    return (
        <ReactMarkdown children={props.content}>
        </ReactMarkdown>
    )

}            
        
export default MarkdownRenderer;