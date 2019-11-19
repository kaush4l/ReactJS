import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import mark from './Markdown.md';

export class Markdown extends Component {

    constructor(props) {
        super(props);
        this.state = { markdown: null }
    }

    componentDidMount() {
        fetch(mark).then((response) => response.text()).then((text) => this.setState({markdown: text}))
    }

    render() {    
        return (
            <div className="w3-display-container">
                <ReactMarkdown source={this.state.markdown} transformImageUri={uri =>
                    `https://github.com/kaush4l/ReactJS/tree/master${uri}`}/>
            </div>
        ); 
    }
}
