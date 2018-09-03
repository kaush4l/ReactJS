import React, { Component } from 'react';
import './Education.css';

export class Work extends Component {
  render() {
    return (
      <div className="w3-display-container w3-sand w3-row-padding">
        <div className="w3-border">
            <div className="w3-container w3-row-padding">
                <h1 className="w3-tag w3-round w3-title w3-left">ESYSTEMS</h1>
                <h1 className="w3-right">Aug 17 - Present</h1>
            </div>
            <div className="w3-container w3-row-padding">
                <div className="w3-threequarter w3-padding">
                    The project is to implement the Eligilibility and Enrollement Framework of the state of Arkansas using Curam.   
                    Curam is an Eligilibility and Enrollement Framework framework by IBM on top of which the application 
                    needs to be customized. The framework supported all the necessary features that were implemented. 
                    A custom portal was also developed using ReactJS and was integrated into the application. This portal was designed 
                    to support all devices and to make it easy to access data.
                </div>
                <div className="w3-panel w3-quarter w3-border-left">
                    Curam Framework <br/>
                    Java <br/>
                    ReactJS <br/>
                    Rest API <br/>
                    SQL <br />
                </div>
            </div>
        </div>
        <div className="w3-border">
            <div className="w3-container w3-row-padding">
                <h1 className="w3-tag w3-round w3-title w3-left">UNIQ Technologies</h1>
                <h1 className="w3-right">March 15 - October 15</h1>
            </div>
            <div className="w3-container w3-row-padding">
                <div className="w3-threequarter w3-padding">
                    The internship project was to develop a ID based messaging application. The application 
                    supported creating of user accounts and account specific avatars. Various chat fetures were 
                    implemented. The storage was also cloud based. Communication was done using Rest calls.
                    
                </div>
                <div className="w3-panel w3-quarter w3-border-left">
                    Android Framework <br/>
                    Java <br/>
                    FireBase <br/>
                    Maven <br/>
                    Rest API <br/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
