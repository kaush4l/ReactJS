import React, { Component } from 'react';
import { Markdown } from './Markdown';
import Oracle from './MdFiles/Experience/Oracle.md';
import Cerner from './MdFiles/Experience/Cerner.md';
import Esys from './MdFiles/Experience/ESystems.md';
import Uniq from './MdFiles/Experience/Uniq.md';

export class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        oracle: null,
        cerner: null,
        esys: null,
        uniq: null
    }
  }

  componentDidMount() {
    fetch(Oracle).then((response) => response.text()).then((text) => this.setState({oracle: text}))
    fetch(Cerner).then((response) => response.text()).then((text) => this.setState({cerner: text}))
    fetch(Esys).then((response) => response.text()).then((text) => this.setState({esys: text}))
    fetch(Uniq).then((response) => response.text()).then((text) => this.setState({uniq: text}))
  }

  render() {
    return (
      <div className="w3-padding">
        <Markdown content={this.state.oracle} />
        <Markdown content={this.state.cerner} />
        <Markdown content={this.state.esys} />
        <Markdown content={this.state.uniq} />

        {/* <div className="w3-row w3-card">
          <div className="w3-container w3-third w3-padding">
            <div className="w3-title w3-display-bottom w3-xlarge">
                August 2018 - Feburary 2020
            </div>
            <div className="w3-title w3-right w3-large">Cerner</div>
            </div>
          <div className="w3-rest">
            <div className="w3-xxlarge">Software developer</div>
            <div className="w3-serif w3-large">
              <i>Joined as a Software developer after going an intensive training on the latest technologies.
              And working with a big team and co-ordinating gave a better scope in team-work and co-ordination.
              The work here has been very helping in developing my professional experience.</i>
            </div>
          </div>
        </div> */}

        {/* <div className="w3-row w3-card">
          <div className="w3-container w3-third w3-padding">
            <div className="w3-title w3-display-bottom w3-xlarge">
                August 2017 - August 2018
            </div>
            <div className="w3-title w3-right w3-large">ESystems Inc</div>
            </div>
          <div className="w3-rest">
            <div className="w3-xxlarge">Associate Software developer</div>
            <div className="w3-serif w3-large">
              <i>As a software Developer in Esystems I had the opportunity to work in a team
              and individualy which helped me a lot in improving my interpersonal and professional skills.
              After the very fast paced training and learning on the go helped me keep up with peers.
              Developed new batch to integrated new incoming data to Curam specific evidences.
              A new notice batch was writtern extensively using Java 8 which improved the performace 
              significantly. The work gave my the flexibility to work and keep abreast with new 
              technologies.              
              </i>
            </div>
          </div>
        </div> */}

        {/* <div className="w3-row w3-card">
          <div className="w3-container w3-third w3-padding">
            <div className="w3-title w3-display-bottom w3-xlarge">
                May 2015 - September 2015
            </div>
            <div className="w3-title w3-right w3-large">UNIQ Technologies</div>
            </div>
          <div className="w3-rest">
            <div className="w3-xxlarge">Android developer</div>
            <div className="w3-serif w3-large">
              <i>As an intern to learn Android development, I have learned a lot about the development 
              environment and Android apps. Being the active learner hepled stay ahead of my peers and 
              also helped me become the 'First fast app developer'. The work here also hepled me improve
              my abilities in learning a lot.           
              </i>
            </div>
          </div>
        </div> */}

      </div>
    );
  }
}
