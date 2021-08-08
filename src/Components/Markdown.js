import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export class Markdown extends Component {

    constructor(props) {
        super(props);
        this.state = { markdown: null }
    }

    render() {    
        return (
            <div className="w3-display-container w3-padding">
                <ReactMarkdown source={this.state.markdown} transformImageUri={uri =>
                    `github.com/kaush4l/ReactJS/tree/master${uri}`} />
                    {/* renderers = {{ heading : P }}  /> */}
            </div>
        ); 
    }
}
