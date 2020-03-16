import React, { Component } from 'react';
import './Education.css';

export class Education extends Component {
  render() {
    return (
      <div className="w3-padding">

        <div className="w3-row w3-card">
            <div className="w3-third">
            {/* <img className="w3-hover-opacity KeyboardLogo" src={require('./uncc.jpg')} alt="UNCC" /> */}
                <div className="w3-title">
                    <div className="w3-display-bottom w3-xxlarge">
                        University of North Carolina at Charlotte
                    </div>
                    <div className="w3-right">Jan 2016 - May 2017</div>
                </div>
            </div>
            <div className="w3-twothird">
                <div className="w3-xxlarge w3-padding">
                    Master's of Computer Science
                </div>
                <div className="w3-padding">
                    The master's program has given me the opportunity to test my skills and apply 
                    practical knowledge. I did various projects which helped me understand the programming 
                    in a new perspective. I learned many new things and technologies. The hands on experience 
                    while working on many projects gave me a chance to challange myself. Subjects like Algorithms 
                    and data structures, Mobile Application development, Cloud Computing and Network based 
                    applications gave working experience on different technologies. Working on various projects 
                    gave me the confidence to understand the probelem and come up with different solutions to tackle it.
                    <br/><p className="w3-panel w3-sand w3-large w3-round w3-center w3-serif"><i>
                    Good, better, best. Never let it rest. 'Till your good is better and your better is the best.'</i>
                    </p>
                </div>
            </div>
        </div>

        <div className="w3-row w3-card">
            <div className="w3-third">
            {/* <img className="w3-hover-opacity KeyboardLogo" src={require('./SRMUniversity.jpg')} alt="SRM" /> */}
                <div className="w3-title">
                    <div className="w3-display-bottom w3-xxlarge">
                        SRM University
                    </div>
                    <div className="w3-right">August 2011 - May 2015</div>
                </div>
            </div>
            <div className="w3-twothird">
                <div className="w3-xxlarge w3-padding">
                    Bachelor's in Information Technology
                </div>
                <div className="w3-padding">
                    Learning has always been my interest. But this is the place that my interest turned 
                    towards coding and found passion in doing it. Various courses that I had taken have helped 
                    me lean many new things. Courses like Cryptography zealed my interest in understanding 
                    logics and findings ways of solving problems. The best things I learned was to understand things 
                    quickly. I was exposed to different tasks which helped me in moulding for a fast paced 
                    environment. I leaned many things and have been trying to make myslef even better. Everyday is a 
                    new challenge and a new day to lean things. 
                    <br/><p className="w3-panel w3-sand w3-large w3-round w3-center w3-serif"><i>
                    I adore the quote "You're given only a litte spark of madness. You mustn't lose it." - Robin Williams.</i>
                    </p>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}
