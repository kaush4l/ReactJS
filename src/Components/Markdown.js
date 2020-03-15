import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
// import mark from './MdFiles/Markdown.md';

export class Markdown extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         markdown: null,
    //     }
    // }

    // componentDidMount() {
    //     fetch(mark).then((response) => response.text()).then((text) => this.setState({markdown: text}))
    // }

    render() {    
        return (
            <div className="w3-display-container w3-padding">
                <ReactMarkdown className="w3-padding" source={this.props.content} /> 
                {/*<ReactMarkdown className="w3-padding" source={this.state.markdown} /> 
                <ReactMarkdown className="w3-padding" source={this.state.markdown2} />  
                    transformImageUri={uri =>
                        `github.com/kaush4l/ReactJS/tree/master${uri}`} /> */}
                    {/* renderers = {{ heading : P }}  /> */}
            </div>
        ); 
    }
}
