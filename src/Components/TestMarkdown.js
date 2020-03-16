import React, { Component } from 'react';
import { Markdown } from './Markdown';
import mark from './MdFiles/Markdown.md';

export class TestMarkdown extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            markdown: null,
        }
    }

    componentDidMount() {
        fetch(mark).then((response) => response.text()).then((text) => this.setState({markdown: text}))
    }

    render() {    
        return (
            <div className="w3-display-container w3-padding">
                <Markdown content={this.state.markdown} />
            </div>
        ); 
    }
}
